import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseResponseRepository } from './BaseResponseRepository';

export class DeleteResponseRepositoryMySQL extends BaseResponseRepository {
  async delete(responseId: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM RespuestasDetalle WHERE respuesta_id = ?`,
      [responseId]
    );
    
    await MySQLConnection.execute(
      `DELETE FROM Respuestas WHERE id = ?`,
      [responseId]
    );
  }
}