import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseAnonymousEmailRepository } from './BaseAnonymousEmailRepository';
import { AnonymousEmail } from '../../../domain/model/AnonymousEmail';

export class GetAllAnonymousEmailsRepositoryMySQL extends BaseAnonymousEmailRepository {
  async findAll(): Promise<AnonymousEmail[]> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM CorreosAnonimos`
    );
    return rows;
  }
}