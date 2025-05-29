import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEvidenceRepository } from './BaseEvidenceRepository';

export class DeleteEvidenceRepositoryMySQL extends BaseEvidenceRepository {
  async delete(id: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM Evidencias WHERE id = ?`,
      [id]
    );
  }
}