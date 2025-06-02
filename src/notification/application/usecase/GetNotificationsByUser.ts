import { Notification } from '../../domain/model/Notification';
import { NotificationRepository } from '../../domain/port/NotificationRepository';

export class GetNotificationsByUser {
  constructor(private repo: NotificationRepository) {}
  async execute(userId: number): Promise<Notification[]> {
    return this.repo.findByUser(userId);
  }
}