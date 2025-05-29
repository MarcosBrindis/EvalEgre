import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEvidenceRepository } from './BaseEvidenceRepository';
import { Evidence } from '../../../domain/model/Evidence';

export class GetAllEvidenceByProjectRepositoryMySQL extends BaseEvidenceRepository {
  async findAllByProject(projectId: number): Promise<Evidence[]> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Evidencias WHERE proyecto_id = ?`,
      [projectId]
    );
    return rows;
  }
}