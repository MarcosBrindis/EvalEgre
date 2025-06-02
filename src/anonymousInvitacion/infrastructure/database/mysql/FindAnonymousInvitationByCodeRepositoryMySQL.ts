import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseAnonymousInvitationRepository } from './BaseAnonymousInvitationRepository';
import { AnonymousInvitation } from '../../../domain/model/AnonymousInvitation';

export class FindAnonymousInvitationByCodeRepositoryMySQL extends BaseAnonymousInvitationRepository {
  async findByCode(code: string): Promise<AnonymousInvitation | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM InvitacionesAnonimas WHERE codigo = ?`,
      [code]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}