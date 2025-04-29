import { BaseSurveyRepository } from './BaseSurveyRepository';
import { Survey } from '../../../domain/model/Survey';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class GetAllSurveysRepositoryMySQL extends BaseSurveyRepository {
  async findAll(): Promise<Survey[]> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Encuestas`
    );
    return rows;
  }
}