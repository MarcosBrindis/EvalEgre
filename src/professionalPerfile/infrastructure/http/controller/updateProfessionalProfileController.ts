import { Request, Response } from 'express';
import { UpdateProfessionalProfile } from '../../../application/usecase/UpdateProfessionalProfile';

export const updateProfessionalProfileController = (updateProfessionalProfile: UpdateProfessionalProfile) => async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.userId, 10);
    if (isNaN(userId)) {
      res.status(400).json({ message: 'Invalid user ID' });
      return;
    }
    await updateProfessionalProfile.execute(userId, req.body);
    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};