import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseAnonymousEmailRepository } from './BaseAnonymousEmailRepository';
import { AnonymousEmail } from '../../../domain/model/AnonymousEmail';

export class CreateAnonymousEmailRepositoryMySQL extends BaseAnonymousEmailRepository {
  async create(data: Omit<AnonymousEmail, 'id' | 'creado_en' | 'actualizado_en'>): Promise<AnonymousEmail> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO CorreosAnonimos (email, nombre) VALUES (?, ?)`,
      [data.email, data.nombre || null]
    );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM CorreosAnonimos WHERE id = ?`,
      [insertId]
    );
    return rows[0];
  }
}