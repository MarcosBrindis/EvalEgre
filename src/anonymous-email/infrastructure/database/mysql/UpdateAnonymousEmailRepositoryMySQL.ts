import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseAnonymousEmailRepository } from './BaseAnonymousEmailRepository';
import { AnonymousEmail } from '../../../domain/model/AnonymousEmail';

export class UpdateAnonymousEmailRepositoryMySQL extends BaseAnonymousEmailRepository {
  async update(id: number, data: Partial<AnonymousEmail>): Promise<void> {
    const fields = Object.keys(data).map(key => `\`${key}\` = ?`).join(', ');
    const values = Object.values(data);
    await MySQLConnection.execute(
      `UPDATE CorreosAnonimos SET ${fields}, actualizado_en = CURRENT_TIMESTAMP WHERE id = ?`,
      [...values, id]
    );
  }
}