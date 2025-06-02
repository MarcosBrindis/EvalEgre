import { AnonymousInvitationRepository } from '../../../domain/port/AnonymousInvitationRepository';
import { AnonymousInvitation } from '../../../domain/model/AnonymousInvitation';

export abstract class BaseAnonymousInvitationRepository implements AnonymousInvitationRepository {
  create(_invitation: Omit<AnonymousInvitation, 'id' | 'creado_en' | 'respondido' | 'respondido_en'>): Promise<AnonymousInvitation> {
    return Promise.reject(new Error('Method not implemented'));
  }
  findByCode(_code: string): Promise<AnonymousInvitation | null> {
    return Promise.reject(new Error('Method not implemented'));
  }
  findBySurvey(_surveyId: number): Promise<AnonymousInvitation[]> {
    return Promise.reject(new Error('Method not implemented'));
  }
  markAsResponded(_code: string): Promise<void> {
    return Promise.reject(new Error('Method not implemented'));
  }
    findByEmailAndSurvey(_email: string, _encuesta_id: number): Promise<AnonymousInvitation | null> { // <-- Agregado
    return Promise.reject(new Error('Method not implemented'));
  }
}