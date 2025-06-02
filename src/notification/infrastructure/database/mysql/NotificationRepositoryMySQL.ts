import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { NotificationRepository } from '../../../domain/port/NotificationRepository';
import { Notification } from '../../../domain/model/Notification';

export class NotificationRepositoryMySQL implements NotificationRepository {
  async create(data: Omit<Notification, 'id' | 'enviada_en'>): Promise<Notification> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO Notificaciones (usuario_id, encuesta_id, mensaje) VALUES (?, ?, ?)`,
      [data.usuario_id, data.encuesta_id, data.mensaje]
    );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Notificaciones WHERE id = ?`,
      [insertId]
    );
    return rows[0];
  }

  async findByUser(userId: number): Promise<Notification[]> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Notificaciones WHERE usuario_id = ?`,
      [userId]
    );
    return rows;
  }

  async markAsRead(id: number): Promise<void> {
    await MySQLConnection.execute(
      `UPDATE Notificaciones SET leida = TRUE WHERE id = ?`,
      [id]
    );
  }

  async markAsResponded(id: number): Promise<void> {
    await MySQLConnection.execute(
      `UPDATE Notificaciones SET respondida = TRUE WHERE id = ?`,
      [id]
    );
  }
}