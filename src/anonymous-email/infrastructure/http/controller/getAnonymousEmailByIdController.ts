import { Request, Response } from 'express';
import { GetAnonymousEmailById } from '../../../application/usecase/GetAnonymousEmailById';

export const getAnonymousEmailByIdController = (getAnonymousEmailById: GetAnonymousEmailById) => async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const anonEmail = await getAnonymousEmailById.execute(id);
    if (!anonEmail) {
      res.status(404).json({ message: 'No encontrado' });
      return;
    }
    res.status(200).json(anonEmail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};