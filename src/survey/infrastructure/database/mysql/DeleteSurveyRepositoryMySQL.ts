import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseSurveyRepository } from './BaseSurveyRepository';

export class DeleteSurveyRepositoryMySQL extends BaseSurveyRepository {
  async delete(id: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM Encuestas WHERE id = ?`,
      [id]
    );
  }
}