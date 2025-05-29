import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEvaluationRepository } from './BaseEvaluationRepository';
import { Evaluation } from '../../../domain/model/Evaluation';

export class CreateEvaluationRepositoryMySQL extends BaseEvaluationRepository {
  async save(data: Omit<Evaluation, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Evaluation> {
    const conn = await MySQLConnection.getConnection();
    try {
      await conn.beginTransaction();

      // 1. Insertar la evaluación
      const [evalResult]: any = await conn.execute(
        `INSERT INTO Evaluaciones (proyecto_id, evaluador_id) VALUES (?, ?)`,
        [data.proyecto_id, data.evaluador_id]
      );
      const evalId = evalResult.insertId;

      // 2. Insertar criterios
      for (const crit of data.criterios) {
        await conn.execute(
          `INSERT INTO EvaluacionCriterio (evaluacion_id, criterio_id, puntuacion, comentario)
           VALUES (?, ?, ?, ?)`,
          [evalId, crit.criterio_id, crit.puntuacion, crit.comentario || null]
        );
      }

      await conn.commit();

      // 3. Obtener la evaluación completa con criterios
      const [evalRows]: any = await conn.execute(`SELECT * FROM Evaluaciones WHERE id = ?`, [evalId]);
      const [critRows]: any = await conn.execute(
        `SELECT criterio_id, puntuacion, comentario FROM EvaluacionCriterio WHERE evaluacion_id = ?`,
        [evalId]
      );

      return {
        ...evalRows[0],
        criterios: critRows
      };
    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  }
}
