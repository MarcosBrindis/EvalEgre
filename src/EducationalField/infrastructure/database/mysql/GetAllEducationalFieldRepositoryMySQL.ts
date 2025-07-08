import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEducationalFieldRepository } from './BaseEducationalFieldRepository';
import { EducationalField } from '../../../domain/model/EducationalField';

export class GetAllEducationalFieldsRepositoryMySQL extends BaseEducationalFieldRepository {
  async findAll(): Promise<EducationalField[]> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM CamposEducacionales ORDER BY numero ASC`
    );
    return rows;
  }
}