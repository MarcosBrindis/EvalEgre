import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEducationalFieldRepository } from './BaseEducationalFieldRepository';

export class DeleteEducationalFieldRepositoryMySQL extends BaseEducationalFieldRepository {
  async delete(id: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM CamposEducacionales WHERE id = ?`,
      [id]
    );
  }
}