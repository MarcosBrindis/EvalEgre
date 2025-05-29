import { Request, Response } from 'express';
import { GetProfessionalProfileByUserId } from '../../../application/usecase/GetProfessionalProfileByUserId';

export const getProfessionalProfileByUserIdController = (getProfessionalProfileByUserId: GetProfessionalProfileByUserId) => async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.userId, 10);
    if (isNaN(userId)) {
      res.status(400).json({ message: 'Invalid user ID' });
      return;
    }
    const profile = await getProfessionalProfileByUserId.execute(userId);
    if (!profile) {
      res.status(404).json({ message: 'Profile not found' });
      return;
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};