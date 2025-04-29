import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseSurveyRepository } from './BaseSurveyRepository';
import { Survey } from '../../../../survey/domain/model/Survey';

export class UpdateSurveyRepositoryMySQL extends BaseSurveyRepository {
  async update(id: number, data: Partial<Survey>): Promise<void> {
    const fields = Object.keys(data)
      .map(key => `\`${key}\` = ?`)
      .join(', ');
    const values = Object.values(data);
    await MySQLConnection.execute(
      `UPDATE Encuestas
         SET ${fields}, actualizado_en = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [...values, id]
    );
  }
}