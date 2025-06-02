import { Request, Response } from 'express';
import { MarkNotificationAsRead } from '../../../application/usecase/MarkNotificationAsRead';

export const markNotificationAsReadController = (markNotificationAsRead: MarkNotificationAsRead) => async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await markNotificationAsRead.execute(id);
    res.status(200).json({ message: 'Marcada como leída' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};