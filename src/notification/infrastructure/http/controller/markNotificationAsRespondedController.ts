import { Request, Response } from 'express';
import { MarkNotificationAsResponded } from '../../../application/usecase/MarkNotificationAsResponded';

export const markNotificationAsRespondedController = (markNotificationAsResponded: MarkNotificationAsResponded) => async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await markNotificationAsResponded.execute(id);
    res.status(200).json({ message: 'Marcada como respondida' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};