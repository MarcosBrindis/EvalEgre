import { Response } from 'express';
import { GetAllEvaluations } from '../../../application/usecase/GetAllEvaluations';

export const getAllEvaluationsController = (getAllEvaluations: GetAllEvaluations) => async (_: unknown, res: Response): Promise<void> => {
  try {
    const evaluations = await getAllEvaluations.execute();
    res.status(200).json(evaluations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};