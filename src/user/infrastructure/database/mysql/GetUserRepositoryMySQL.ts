import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseUserRepository } from './BaseUserRepository';
import { User } from '../../../../user/domain/model/User';

export class GetUserRepositoryMySQL extends BaseUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Usuarios WHERE email = ? LIMIT 1`,
      [email]
    );
    return rows.length ? rows[0] : null;
  }

  async findById(id: number): Promise<User | null> {
    const [rows]: any = await MySQLConnection.execute(
      'SELECT * FROM Usuarios WHERE id = ?',
      [id]
    );
    return rows.length ? rows[0] : null;
  }

  async findByOAuthUid(uid: string): Promise<User | null> {
    const [rows]: any = await MySQLConnection.execute(
      'SELECT * FROM Usuarios WHERE oauth_uid = ?',
      [uid]
    );
    return rows.length ? rows[0] : null;
  }
  
  async findAll(): Promise<User[]> {
    const [rows]: any = await MySQLConnection.execute('SELECT * FROM Usuarios');
    return rows as User[];
  }
}