import { NotificationService } from '../../domain/port/NotificationService';
import { SurveyNotificationService } from '../service/SurveyNotificationService';

export class NotificationServiceImpl implements NotificationService {
  initialize(): void {
    SurveyNotificationService.initialize();
  }
}