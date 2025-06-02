import { CreateNotification } from '../application/usecase/CreateNotification';
import { GetNotificationsByUser } from '../application/usecase/GetNotificationsByUser';
import { MarkNotificationAsRead } from '../application/usecase/MarkNotificationAsRead';
import { MarkNotificationAsResponded } from '../application/usecase/MarkNotificationAsResponded';
import { CreateAnonymousNotification } from '../application/usecase/CreateAnonymousNotification';

import { NotificationRepositoryMySQL } from './database/mysql/NotificationRepositoryMySQL';
import { AnonymousNotificationRepositoryMySQL } from './database/mysql/AnonymousNotificationRepositoryMySQL';

import { GetAllUsers } from '../../user/application/usecase/GetAllUsers';
import { GetUserRepositoryMySQL } from '../../user/infrastructure/database/mysql/GetUserRepositoryMySQL';

const notificationRepo = new NotificationRepositoryMySQL();
const anonymousNotificationRepo = new AnonymousNotificationRepositoryMySQL();
const getUserRepo = new GetUserRepositoryMySQL();

const getAllUsers = new GetAllUsers(getUserRepo);

export const dependencies = {
  createNotification: new CreateNotification(notificationRepo),
  getNotificationsByUser: new GetNotificationsByUser(notificationRepo),
  markNotificationAsRead: new MarkNotificationAsRead(notificationRepo),
  markNotificationAsResponded: new MarkNotificationAsResponded(notificationRepo),
  createAnonymousNotification: new CreateAnonymousNotification(anonymousNotificationRepo),
  getAllUsers
};