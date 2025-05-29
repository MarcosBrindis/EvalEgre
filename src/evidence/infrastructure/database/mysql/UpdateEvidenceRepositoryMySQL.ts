import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEvidenceRepository } from './BaseEvidenceRepository';
import { Evidence } from '../../../domain/model/Evidence';

export class UpdateEvidenceRepositoryMySQL extends BaseEvidenceRepository {
  async update(id: number, data: Partial<Evidence>): Promise<void> {
    const fields = Object.keys(data)
      .map(key => `\`${key}\` = ?`)
      .join(', ');
    const values = Object.values(data);
    await MySQLConnection.execute(
      `UPDATE Evidencias
         SET ${fields}, actualizado_en = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [...values, id]
    );
  }
}