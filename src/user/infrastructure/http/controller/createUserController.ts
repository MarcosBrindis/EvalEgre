import { Request, Response } from 'express';
import { CreateUser } from '../../../application/usecase/CreateUser';

export const createUserController = (createUser: CreateUser) => async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await createUser.execute(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};