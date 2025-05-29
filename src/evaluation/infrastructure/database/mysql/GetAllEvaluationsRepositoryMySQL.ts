import { BaseEvaluationRepository } from './BaseEvaluationRepository';
import { Evaluation } from '../../../domain/model/Evaluation';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class GetAllEvaluationsRepositoryMySQL extends BaseEvaluationRepository {
  async findAll(): Promise<Evaluation[]> {
    const [evalRows]: any = await MySQLConnection.execute(`SELECT * FROM Evaluaciones`);
    if (evalRows.length === 0) return [];

    const evaluations: Evaluation[] = [];
    for (const evalRow of evalRows) {
      const [critRows]: any = await MySQLConnection.execute(
        `SELECT criterio_id, puntuacion, comentario FROM EvaluacionCriterio WHERE evaluacion_id = ?`,
        [evalRow.id]
      );
      evaluations.push({
        ...evalRow,
        criterios: critRows
      });
    }
    return evaluations;
  }
}