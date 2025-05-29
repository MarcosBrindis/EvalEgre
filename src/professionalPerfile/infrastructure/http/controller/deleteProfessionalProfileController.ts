import { Request, Response } from 'express';
import { DeleteProfessionalProfile } from '../../../application/usecase/DeleteProfessionalProfile';

export const deleteProfessionalProfileController = (deleteProfessionalProfile: DeleteProfessionalProfile) => async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400).json({ message: 'Invalid profile ID' });
      return;
    }
    await deleteProfessionalProfile.execute(id);
    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};