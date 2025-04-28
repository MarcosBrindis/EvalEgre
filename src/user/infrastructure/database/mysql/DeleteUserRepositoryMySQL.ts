import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseUserRepository } from './BaseUserRepository';

export class DeleteUserRepositoryMySQL extends BaseUserRepository {
  async delete(id: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM Usuarios WHERE id = ?`,
      [id]
    );
  }
}