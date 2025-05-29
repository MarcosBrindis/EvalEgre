import { BaseCriterionRepository } from './BaseCriterionRepository';
import { Criterion } from '../../../domain/model/Criterion';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class GetAllCriteriaRepositoryMySQL extends BaseCriterionRepository {
  async findAll(): Promise<Criterion[]> {
    const [rows]: any = await MySQLConnection.execute(`SELECT * FROM Criterios`);
    return rows;
  }
}