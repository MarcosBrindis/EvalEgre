import { Response } from 'express';
import { GetAllProfessionalProfiles } from '../../../application/usecase/GetAllProfessionalProfiles';

export const getAllProfessionalProfilesController = (getAllProfessionalProfiles: GetAllProfessionalProfiles) => async (_: unknown, res: Response): Promise<void> => {
  try {
    const profiles = await getAllProfessionalProfiles.execute();
    res.status(200).json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};