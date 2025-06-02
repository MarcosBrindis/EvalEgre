import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseAnonymousEmailRepository } from './BaseAnonymousEmailRepository';
import { AnonymousEmail } from '../../../domain/model/AnonymousEmail';

export class FindAnonymousEmailByIdRepositoryMySQL extends BaseAnonymousEmailRepository {
  async findById(id: number): Promise<AnonymousEmail | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM CorreosAnonimos WHERE id = ?`,
      [id]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}