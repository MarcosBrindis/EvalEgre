import { Response } from '../../../domain/model/Response';
import { ResponseDetail } from '../../../domain/model/ResponseDetail';
import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseResponseRepository } from './BaseResponseRepository';

export class CreateResponseRepositoryMySQL extends BaseResponseRepository {
  async save(response: Response): Promise<number> {
    // Verificar si la encuesta es anónima
    const [survey]: any = await MySQLConnection.execute(
      `SELECT anonima FROM Encuestas WHERE id = ?`,
      [response.encuesta_id]
    );

    if (survey.length === 0) {
      throw new Error('Survey not found');
    }

    const isAnonymous = survey[0].anonima;

    // Si la encuesta es anónima, no incluir usuario_id
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO Respuestas (encuesta_id, usuario_id) VALUES (?, ?)`,
      [response.encuesta_id, isAnonymous ? null : response.usuario_id]
    );

    return result.insertId;
  }

  async saveDetail(detail: ResponseDetail): Promise<void> {
    await MySQLConnection.execute(
      `INSERT INTO RespuestasDetalle (respuesta_id, pregunta_id, valor_texto, valor_numero) VALUES (?, ?, ?, ?)`,
      [detail.respuesta_id, detail.pregunta_id, detail.valor_texto || null, detail.valor_numero || null]
    );
  }
}