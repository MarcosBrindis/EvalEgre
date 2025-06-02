import { AnonymousNotification } from '../model/AnonymousNotification';

export interface AnonymousNotificationRepository {
  create(notification: Omit<AnonymousNotification, 'id' | 'enviada_en' | 'enviada'>): Promise<AnonymousNotification>;
  markAsSent(id: number): Promise<void>;
  findByInvitation(invitationId: number): Promise<AnonymousNotification[]>;
}