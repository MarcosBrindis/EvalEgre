import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEvidenceRepository } from './BaseEvidenceRepository';
import { Evidence } from '../../../domain/model/Evidence';

export class FindEvidenceByIdRepositoryMySQL extends BaseEvidenceRepository {
  async findById(id: number): Promise<Evidence | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Evidencias WHERE id = ?`,
      [id]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}