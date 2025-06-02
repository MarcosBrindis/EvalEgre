import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseAnonymousInvitationRepository } from './BaseAnonymousInvitationRepository';
import { AnonymousInvitation } from '../../../domain/model/AnonymousInvitation';

export class CreateAnonymousInvitationRepositoryMySQL extends BaseAnonymousInvitationRepository {
  async create(data: Omit<AnonymousInvitation, 'id' | 'creado_en' | 'respondido' | 'respondido_en'>): Promise<AnonymousInvitation> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO InvitacionesAnonimas (encuesta_id, codigo, email) VALUES (?, ?, ?)`,
      [data.encuesta_id, data.codigo, data.email || null]
    );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM InvitacionesAnonimas WHERE id = ?`,
      [insertId]
    );
    return rows[0];
  }
    async findByEmailAndSurvey(email: string, encuesta_id: number): Promise<AnonymousInvitation | null> {
    const [rows]: any = await MySQLConnection.execute(
      'SELECT * FROM InvitacionesAnonimas WHERE email = ? AND encuesta_id = ? LIMIT 1',
      [email, encuesta_id]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}