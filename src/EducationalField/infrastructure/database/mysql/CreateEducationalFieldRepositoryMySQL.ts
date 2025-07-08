import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEducationalFieldRepository } from './BaseEducationalFieldRepository';
import { EducationalField } from '../../../domain/model/EducationalField';

export class CreateEducationalFieldRepositoryMySQL extends BaseEducationalFieldRepository {
  async create(data: Omit<EducationalField, 'id' | 'creado_en' | 'actualizado_en'>): Promise<EducationalField> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO CamposEducacionales (numero, nombre, descripcion, is_active) VALUES (?, ?, ?, ?)`,
      [data.numero, data.nombre, data.descripcion || null, data.is_active ?? true]
    );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM CamposEducacionales WHERE id = ?`,
      [insertId]
    );
    return rows[0];
  }
}