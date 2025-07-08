import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEducationalFieldRepository } from './BaseEducationalFieldRepository';
import { EducationalField } from '../../../domain/model/EducationalField';

export class FindEducationalFieldByIdRepositoryMySQL extends BaseEducationalFieldRepository {
  async findById(id: number): Promise<EducationalField | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM CamposEducacionales WHERE id = ?`,
      [id]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}