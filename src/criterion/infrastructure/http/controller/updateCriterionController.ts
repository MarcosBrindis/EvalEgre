import { Request, Response } from 'express';
import { UpdateCriterion } from '../../../application/usecase/UpdateCriterion';

export const updateCriterionController = (updateCriterion: UpdateCriterion) => async (req: Request, res: Response): Promise<void> => {
  try {
    const criterionId = parseInt(req.params.id, 10);
    if (isNaN(criterionId)) {
      res.status(400).json({ message: 'Invalid criterion ID' });
      return;
    }

    await updateCriterion.execute(criterionId, req.body);
    res.status(200).json({ message: 'Criterion updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};