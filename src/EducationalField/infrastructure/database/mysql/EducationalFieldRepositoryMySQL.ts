import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { EducationalFieldRepository } from '../../../domain/port/EducationalFieldRepository';
import { EducationalField } from '../../../domain/model/EducationalField';

export class EducationalFieldRepositoryMySQL implements EducationalFieldRepository {
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

  async update(id: number, data: Partial<EducationalField>): Promise<void> {
    const fields = Object.keys(data).map(key => `\`${key}\` = ?`).join(', ');
    const values = Object.values(data);
    await MySQLConnection.execute(
      `UPDATE CamposEducacionales SET ${fields}, actualizado_en = CURRENT_TIMESTAMP WHERE id = ?`,
      [...values, id]
    );
  }

  async delete(id: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM CamposEducacionales WHERE id = ?`,
      [id]
    );
  }

  async findById(id: number): Promise<EducationalField | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM CamposEducacionales WHERE id = ?`,
      [id]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  async findByNumero(numero: number): Promise<EducationalField | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM CamposEducacionales WHERE numero = ?`,
      [numero]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  async findAll(): Promise<EducationalField[]> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM CamposEducacionales ORDER BY numero ASC`
    );
    return rows;
  }
}
