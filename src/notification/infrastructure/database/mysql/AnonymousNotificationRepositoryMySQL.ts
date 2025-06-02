import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { AnonymousNotificationRepository } from '../../../domain/port/AnonymousNotificationRepository';
import { AnonymousNotification } from '../../../domain/model/AnonymousNotification';

export class AnonymousNotificationRepositoryMySQL implements AnonymousNotificationRepository {
  async create(data: Omit<AnonymousNotification, 'id' | 'enviada_en' | 'enviada'>): Promise<AnonymousNotification> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO NotificacionesAnonimas (invitacion_id, encuesta_id, mensaje) VALUES (?, ?, ?)`,
      [data.invitacion_id, data.encuesta_id, data.mensaje]
    );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM NotificacionesAnonimas WHERE id = ?`,
      [insertId]
    );
    return rows[0];
  }

  async markAsSent(id: number): Promise<void> {
    await MySQLConnection.execute(
      `UPDATE NotificacionesAnonimas SET enviada = TRUE, enviada_en = CURRENT_TIMESTAMP WHERE id = ?`,
      [id]
    );
  }

  async findByInvitation(invitationId: number): Promise<AnonymousNotification[]> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM NotificacionesAnonimas WHERE invitacion_id = ?`,
      [invitationId]
    );
    return rows;
  }
}