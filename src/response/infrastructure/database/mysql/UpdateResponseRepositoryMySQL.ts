import { Response } from '../../../domain/model/Response';
import { ResponseDetail } from '../../../domain/model/ResponseDetail';
import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseResponseRepository } from './BaseResponseRepository';

export class UpdateResponseRepositoryMySQL extends BaseResponseRepository {
  async update(response: Response): Promise<void> {
    await MySQLConnection.execute(
      `UPDATE Respuestas SET encuesta_id = ?, usuario_id = ? WHERE id = ?`,
      [response.encuesta_id, response.usuario_id || null, response.id]
    );
  }

  async updateDetail(detail: ResponseDetail): Promise<void> {
    await MySQLConnection.execute(
      `UPDATE RespuestasDetalle SET valor_texto = ?, valor_numero = ? WHERE respuesta_id = ? AND pregunta_id = ?`,
      [detail.valor_texto || null, detail.valor_numero || null, detail.respuesta_id, detail.pregunta_id]
    );
  }
}