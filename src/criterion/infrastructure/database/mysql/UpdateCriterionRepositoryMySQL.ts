import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseCriterionRepository } from './BaseCriterionRepository';
import { Criterion } from '../../../domain/model/Criterion';

export class UpdateCriterionRepositoryMySQL extends BaseCriterionRepository {
  async update(id: number, data: Partial<Criterion>): Promise<void> {
    const fields = Object.keys(data)
      .map(key => `\`${key}\` = ?`)
      .join(', ');
    const values = Object.values(data);
    await MySQLConnection.execute(
      `UPDATE Criterios
         SET ${fields}
       WHERE id = ?`,
      [...values, id]
    );
  }
}