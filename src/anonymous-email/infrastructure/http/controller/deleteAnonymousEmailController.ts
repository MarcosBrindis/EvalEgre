import { Request, Response } from 'express';
import { DeleteAnonymousEmail } from '../../../application/usecase/DeleteAnonymousEmail';

export const deleteAnonymousEmailController = (deleteAnonymousEmail: DeleteAnonymousEmail) => async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await deleteAnonymousEmail.execute(id);
    res.status(200).json({ message: 'Email eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};