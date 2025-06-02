import { Notification } from '../model/Notification';

export interface NotificationRepository {
  create(notification: Omit<Notification, 'id' | 'enviada_en'>): Promise<Notification>;
  findByUser(userId: number): Promise<Notification[]>;
  markAsRead(id: number): Promise<void>;
  markAsResponded(id: number): Promise<void>;
}