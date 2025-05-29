import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEvaluationRepository } from './BaseEvaluationRepository';

export class DeleteEvaluationRepositoryMySQL extends BaseEvaluationRepository {
  async delete(id: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM Evaluaciones WHERE id = ?`,
      [id]
    );
  }
}