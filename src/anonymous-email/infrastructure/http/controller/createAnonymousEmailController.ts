import { Request, Response } from 'express';
import { CreateAnonymousEmail } from '../../../application/usecase/CreateAnonymousEmail';

export const createAnonymousEmailController = (createAnonymousEmail: CreateAnonymousEmail) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, nombre } = req.body;
    const anonEmail = await createAnonymousEmail.execute({ email, nombre });
    res.status(201).json(anonEmail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};