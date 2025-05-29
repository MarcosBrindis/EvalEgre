import { EvidenceTypeRepository } from '../../../domain/port/EvidenceTypeRepository';
import { EvidenceType } from '../../../domain/model/EvidenceType';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class EvidenceTypeRepositoryMySQL implements EvidenceTypeRepository {
  async findAll(): Promise<EvidenceType[]> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM TiposEvidencia`
    );
    return rows;
  }
  async findById(id: number): Promise<EvidenceType | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM TiposEvidencia WHERE id = ?`,
      [id]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}