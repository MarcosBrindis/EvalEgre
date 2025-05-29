import { BaseEvaluationRepository } from './BaseEvaluationRepository';
import { Evaluation } from '../../../domain/model/Evaluation';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class FindEvaluationByIdRepositoryMySQL extends BaseEvaluationRepository {
  async findById(id: number): Promise<Evaluation | null> {
    const [evalRows]: any = await MySQLConnection.execute(
      `SELECT * FROM Evaluaciones WHERE id = ?`,
      [id]
    );
    if (evalRows.length === 0) return null;

    const [critRows]: any = await MySQLConnection.execute(
      `SELECT criterio_id, puntuacion, comentario FROM EvaluacionCriterio WHERE evaluacion_id = ?`,
      [id]
    );

    return {
      ...evalRows[0],
      criterios: critRows
    };
  }
}