import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseCriterionRepository } from './BaseCriterionRepository';

export class DeleteCriterionRepositoryMySQL extends BaseCriterionRepository {
  async delete(id: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM Criterios WHERE id = ?`,
      [id]
    );
  }
}