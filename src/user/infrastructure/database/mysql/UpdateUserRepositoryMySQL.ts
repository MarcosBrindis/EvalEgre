import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseUserRepository } from './BaseUserRepository';
import { User } from '../../../../user/domain/model/User';

export class UpdateUserRepositoryMySQL extends BaseUserRepository {
  async update(id: number, data: Partial<User>): Promise<void> {
    const fields = Object.keys(data)
      .map(key => `\`${key}\` = ?`)
      .join(', ');
    const values = Object.values(data);
    await MySQLConnection.execute(
      `UPDATE Usuarios
         SET ${fields}, actualizado_en = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [...values, id]
    );
  }
}