import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEvidenceRepository } from './BaseEvidenceRepository';
import { Evidence } from '../../../domain/model/Evidence';

export class CreateEvidenceRepositoryMySQL extends BaseEvidenceRepository {
  async save(data: Omit<Evidence, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Evidence> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO Evidencias (proyecto_id, archivo, filename, mime_type, tipo_id, descripcion, subido_por)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        data.proyecto_id,
        data.archivo,
        data.filename,
        data.mime_type,
        data.tipo_id,
        data.descripcion || null,
        data.subido_por || null
      ]
    );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Evidencias WHERE id = ?`,
      [insertId]
    );
    return rows[0];
  }
}