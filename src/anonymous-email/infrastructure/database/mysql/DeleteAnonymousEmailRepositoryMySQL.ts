import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseAnonymousEmailRepository } from './BaseAnonymousEmailRepository';

export class DeleteAnonymousEmailRepositoryMySQL extends BaseAnonymousEmailRepository {
  async delete(id: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM CorreosAnonimos WHERE id = ?`,
      [id]
    );
  }
}