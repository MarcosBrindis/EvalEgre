import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseAnonymousInvitationRepository } from './BaseAnonymousInvitationRepository';
import { AnonymousInvitation } from '../../../domain/model/AnonymousInvitation';

export class FindAnonymousInvitationsBySurveyRepositoryMySQL extends BaseAnonymousInvitationRepository {
  async findBySurvey(surveyId: number): Promise<AnonymousInvitation[]> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM InvitacionesAnonimas WHERE encuesta_id = ?`,
      [surveyId]
    );
    return rows;
  }
}