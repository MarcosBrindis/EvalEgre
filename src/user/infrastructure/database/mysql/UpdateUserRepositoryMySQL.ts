import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseUserRepository } from './BaseUserRepository';
import { User } from '../../../../user/domain/model/User';

export class UpdateUserRepositoryMySQL extends BaseUserRepository {
  async update(id: number, data: Partial<User>): Promise<void> {
    
    const excludedFields = ['id', 'tipo', 'creado_en', 'actualizado_en', 'password']; 
    
    const filteredData = Object.keys(data)
      .filter(key => !excludedFields.includes(key))
      .reduce((obj: any, key) => {
        obj[key] = (data as any)[key];
        return obj;
      }, {});

    if (Object.keys(filteredData).length === 0) {
      throw new Error('No valid fields to update');
    }

    const fields = Object.keys(filteredData)
      .map(key => `\`${key}\` = ?`)
      .join(', ');
    const values = Object.values(filteredData);

    await MySQLConnection.execute(
      `UPDATE Usuarios
         SET ${fields}, actualizado_en = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [...values, id]
    );
  }
}