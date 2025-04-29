import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseSurveyRepository } from './BaseSurveyRepository';
import { Survey } from '../../../domain/model/Survey';

export class FindSurveyByIdRepositoryMySQL extends BaseSurveyRepository {
  async findById(id: number): Promise<Survey | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Encuestas WHERE id = ?`,
      [id]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}