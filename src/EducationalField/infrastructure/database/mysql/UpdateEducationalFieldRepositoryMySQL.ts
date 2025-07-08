import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEducationalFieldRepository } from './BaseEducationalFieldRepository';
import { EducationalField } from '../../../domain/model/EducationalField';

export class UpdateEducationalFieldRepositoryMySQL extends BaseEducationalFieldRepository {
  async update(id: number, data: Partial<EducationalField>): Promise<void> {
    const fields = Object.keys(data).map(key => `\`${key}\` = ?`).join(', ');
    const values = Object.values(data);
    await MySQLConnection.execute(
      `UPDATE CamposEducacionales SET ${fields}, actualizado_en = CURRENT_TIMESTAMP WHERE id = ?`,
      [...values, id]
    );
  }
}