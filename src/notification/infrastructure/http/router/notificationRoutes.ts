import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createNotificationController } from '../controller/createNotificationController';
import { getNotificationsByUserController } from '../controller/getNotificationsByUserController';
import { markNotificationAsReadController } from '../controller/markNotificationAsReadController';
import { markNotificationAsRespondedController } from '../controller/markNotificationAsRespondedController';
import { createAnonymousNotificationsController } from '../controller/createAnonymousNotificationsController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';

const router = Router();

// Instancia los controladores con su dependencia
const createNotification = createNotificationController(dependencies.createNotification,dependencies.getAllUsers.execute.bind(dependencies.getAllUsers));
const getNotificationsByUser = getNotificationsByUserController(dependencies.getNotificationsByUser);
const markNotificationAsRead = markNotificationAsReadController(dependencies.markNotificationAsRead);
const markNotificationAsResponded = markNotificationAsRespondedController(dependencies.markNotificationAsResponded);
const createAnonymousNotifications = createAnonymousNotificationsController(dependencies.createAnonymousNotification);

// Notificaciones para usuarios registrados
router.post('/', AuthMiddleware.verifyToken, createNotification);
router.get('/user', AuthMiddleware.verifyToken, getNotificationsByUser);
router.put('/:id/mark-read', AuthMiddleware.verifyToken, markNotificationAsRead);
router.put('/:id/mark-responded', AuthMiddleware.verifyToken, markNotificationAsResponded);

// Notificaciones anónimas (envío masivo por correo)
router.post('/anonymous', createAnonymousNotifications);

export default router;