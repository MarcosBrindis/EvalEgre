import { Request, Response } from 'express';
import { UpdateUser } from '../../../application/usecase/UpdateUser';

export const updateUserController = (updateUser: UpdateUser) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);

    if (isNaN(userId)) {
      res.status(400).json({ message: 'Invalid user ID' });
      return;
    }

    await updateUser.execute(userId, req.body);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};