import { Request, Response } from 'express';
import { DeleteUser } from '../../../application/usecase/DeleteUser';

export const deleteUserController = (deleteUser: DeleteUser) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);

    if (isNaN(userId)) {
      res.status(400).json({ message: 'Invalid user ID' });
      return;
    }

    await deleteUser.execute(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};