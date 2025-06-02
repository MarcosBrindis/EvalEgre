import { Request, Response } from 'express';
import { GetNotificationsByUser } from '../../../application/usecase/GetNotificationsByUser';

export const getNotificationsByUserController = (getNotificationsByUser: GetNotificationsByUser) => async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = Number((req as any).user.id); // id del usuario autenticado
    const notifications = await getNotificationsByUser.execute(userId);
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};