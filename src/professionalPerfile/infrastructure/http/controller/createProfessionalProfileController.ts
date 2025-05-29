import { Request, Response } from 'express';
import { CreateProfessionalProfile } from '../../../application/usecase/CreateProfessionalProfile';

export const createProfessionalProfileController = (createProfessionalProfile: CreateProfessionalProfile) => async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario_id = (req as any).user?.id; 
    const profile = await createProfessionalProfile.execute({ ...req.body, usuario_id });
    res.status(201).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};