import { Request, Response } from 'express';
import { UpdateAnonymousEmail } from '../../../application/usecase/UpdateAnonymousEmail';

export const updateAnonymousEmailController = (updateAnonymousEmail: UpdateAnonymousEmail) => async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await updateAnonymousEmail.execute(id, req.body);
    res.status(200).json({ message: 'Email actualizado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};