import { Request, Response } from 'express';
import { CreateNotification } from '../../../application/usecase/CreateNotification';

export const createNotificationController = (
  createNotification: CreateNotification,
  getAllUsers: () => Promise<any[]>
) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { encuesta_id, mensaje } = req.body;
    const users = await getAllUsers();
    const notifications = [];

    for (const user of users) {
      const notification = await createNotification.execute({
        usuario_id: user.id,
        encuesta_id,
        mensaje
      });
      notifications.push(notification);
    }

    res.status(201).json({ sent: notifications.length, notifications });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};