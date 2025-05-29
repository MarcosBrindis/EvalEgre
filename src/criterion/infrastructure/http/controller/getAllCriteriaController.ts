import { Response } from 'express';
import { GetAllCriteria } from '../../../application/usecase/GetAllCriteria';

export const getAllCriteriaController = (getAllCriteria: GetAllCriteria) => async (_: unknown, res: Response): Promise<void> => {
  try {
    const criteria = await getAllCriteria.execute();
    res.status(200).json(criteria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};