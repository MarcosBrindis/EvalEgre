import { Request, Response } from 'express';
import { GetAllEvidenceTypes } from '../../../application/usecase/GetAllEvidenceType';

export const getAllEvidenceTypesController = (getAllEvidenceTypes: GetAllEvidenceTypes) => async (_: Request, res: Response): Promise<void> => {
  try {
    const types = await getAllEvidenceTypes.execute();
    res.status(200).json(types);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};