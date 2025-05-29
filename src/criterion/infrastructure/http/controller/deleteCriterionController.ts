import { Request, Response } from 'express';
import { DeleteCriterion } from '../../../application/usecase/DeleteCriterion';

export const deleteCriterionController = (deleteCriterion: DeleteCriterion) => async (req: Request, res: Response): Promise<void> => {
  try {
    const criterionId = parseInt(req.params.id, 10);
    if (isNaN(criterionId)) {
      res.status(400).json({ message: 'Invalid criterion ID' });
      return;
    }

    await deleteCriterion.execute(criterionId);
    res.status(200).json({ message: 'Criterion deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};