import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { AnonymousInvitation } from '../../../domain/model/AnonymousInvitation';

export class FindAnonymousInvitationByEmailAndSurveyRepositoryMySQL {
  async findByEmailAndSurvey(email: string, encuesta_id: number): Promise<AnonymousInvitation | null> {
    const [rows]: any = await MySQLConnection.execute(
      'SELECT * FROM InvitacionesAnonimas WHERE email = ? AND encuesta_id = ? LIMIT 1',
      [email, encuesta_id]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}