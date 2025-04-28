import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseUserRepository } from './BaseUserRepository';
import { User } from '../../../../user/domain/model/User';

export class CreateUserRepositoryMySQL extends BaseUserRepository {
  async save(data: Omit<User, 'id'|'creado_en'|'actualizado_en'>): Promise<User> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO Usuarios
         (tipo,nombre,email,password_hash,telefono,fecha_nacimiento,is_active,habilidades,experiencia,oauth_uid,profile_picture)
       VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
       [
      data.tipo,
      data.nombre || null, 
      data.email,
      data.password_hash,
      data.telefono || null, 
      data.fecha_nacimiento || null,
      data.is_active,
      data.habilidades || null,
      data.experiencia || null, 
      data.oauth_uid || null, 
      data.profile_picture || null, 
    ]
  );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Usuarios WHERE id = ?`,
      [insertId]
    );
    return rows[0];
  }
}