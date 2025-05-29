import { Request, Response } from 'express';
import { GetProfessionalProfileById } from '../../../application/usecase/GetProfessionalProfileById';

export const getProfessionalProfileByIdController = (getProfessionalProfileById: GetProfessionalProfileById) => async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400).json({ message: 'Invalid profile ID' });
      return;
    }
    const profile = await getProfessionalProfileById.execute(id);
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