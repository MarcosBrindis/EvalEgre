import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseAnonymousInvitationRepository } from './BaseAnonymousInvitationRepository';

export class MarkAnonymousInvitationAsRespondedRepositoryMySQL extends BaseAnonymousInvitationRepository {
  async markAsResponded(code: string): Promise<void> {
    await MySQLConnection.execute(
      `UPDATE InvitacionesAnonimas SET respondido = TRUE, respondido_en = CURRENT_TIMESTAMP WHERE codigo = ?`,
      [code]
    );
  }
}