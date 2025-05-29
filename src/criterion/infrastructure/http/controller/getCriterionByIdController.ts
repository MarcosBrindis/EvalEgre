import { Request, Response } from 'express';
import { GetCriterionById } from '../../../application/usecase/GetCriterionById';

export const getCriterionByIdController = (getCriterionById: GetCriterionById) => async (req: Request, res: Response): Promise<void> => {
  try {
    const criterionId = parseInt(req.params.id, 10);
    if (isNaN(criterionId)) {
      res.status(400).json({ message: 'Invalid criterion ID' });
      return;
    }

    const criterion = await getCriterionById.execute(criterionId);
    if (!criterion) {
      res.status(404).json({ message: 'Criterion not found' });
      return;
    }

    res.status(200).json(criterion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};