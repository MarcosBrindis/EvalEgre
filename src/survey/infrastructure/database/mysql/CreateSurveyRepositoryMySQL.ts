import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseSurveyRepository } from './BaseSurveyRepository';
import { Survey } from '../../../domain/model/Survey';

export class CreateSurveyRepositoryMySQL extends BaseSurveyRepository {
  async save(data: Omit<Survey, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Survey> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO Encuestas
         (titulo, descripcion, tipo, anonima, inicio, fin, creado_por)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        data.titulo,
        data.descripcion || null,
        data.tipo,
        data.anonima,
        data.inicio || null,
        data.fin || null,
        data.creado_por || null, 
      ]
    );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Encuestas WHERE id = ?`,
      [insertId]
    );
    return rows[0];
  }
}