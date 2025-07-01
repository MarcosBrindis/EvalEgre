import { Request, Response } from 'express';
import { GetAllUsers } from '../../../application/usecase/GetAllUsers';

export const getAllUsersController = (getAllUsers: GetAllUsers) => async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers.execute();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};