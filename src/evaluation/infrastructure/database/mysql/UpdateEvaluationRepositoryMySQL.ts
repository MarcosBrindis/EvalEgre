import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEvaluationRepository } from './BaseEvaluationRepository';
import { Evaluation } from '../../../domain/model/Evaluation';

export class UpdateEvaluationRepositoryMySQL extends BaseEvaluationRepository {
  async update(
    id: number,
    data: Partial<Omit<Evaluation, 'id' | 'creado_en' | 'actualizado_en'>>
  ): Promise<void> {
    const conn = await MySQLConnection.getConnection();
    try {
      await conn.beginTransaction();

      // 1. Actualizar datos de la evaluación si aplica (proyecto_id, evaluador_id)
      if (data.proyecto_id !== undefined || data.evaluador_id !== undefined) {
        const fields: string[] = [];
        const values: any[] = [];
        if (data.proyecto_id !== undefined) {
          fields.push('proyecto_id = ?');
          values.push(data.proyecto_id);
        }
        if (data.evaluador_id !== undefined) {
          fields.push('evaluador_id = ?');
          values.push(data.evaluador_id);
        }
        if (fields.length > 0) {
          await conn.execute(
            `UPDATE Evaluaciones SET ${fields.join(', ')}, actualizado_en = CURRENT_TIMESTAMP WHERE id = ?`,
            [...values, id]
          );
        }
      }

      // 2. Si llegan criterios, reemplazar todos los criterios de la evaluación
      if (data.criterios) {
        await conn.execute(`DELETE FROM EvaluacionCriterio WHERE evaluacion_id = ?`, [id]);
        for (const crit of data.criterios) {
          await conn.execute(
            `INSERT INTO EvaluacionCriterio (evaluacion_id, criterio_id, puntuacion, comentario)
             VALUES (?, ?, ?, ?)`,
            [id, crit.criterio_id, crit.puntuacion, crit.comentario || null]
          );
        }
      }

      await conn.commit();
    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  }
}
