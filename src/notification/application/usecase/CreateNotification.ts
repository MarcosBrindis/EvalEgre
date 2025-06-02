import { Notification } from '../../domain/model/Notification';
import { NotificationRepository } from '../../domain/port/NotificationRepository';

export class CreateNotification {
  constructor(private repo: NotificationRepository) {}
  async execute(data: Omit<Notification, 'id' | 'enviada_en'>): Promise<Notification> {
    return this.repo.create(data);
  }
}