import { BaseCriterionRepository } from './BaseCriterionRepository';
import { Criterion } from '../../../domain/model/Criterion';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class FindCriterionByIdRepositoryMySQL extends BaseCriterionRepository {
  async findById(id: number): Promise<Criterion | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Criterios WHERE id = ?`,
      [id]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}