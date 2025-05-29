import { Request, Response } from 'express';
import { UpdateEvaluation } from '../../../application/usecase/UpdateEvaluation';

export const updateEvaluationController = (updateEvaluation: UpdateEvaluation) => async (req: Request, res: Response): Promise<void> => {
  try {
    const evalId = parseInt(req.params.id, 10);
    if (isNaN(evalId)) {
      res.status(400).json({ message: 'Invalid evaluation ID' });
      return;
    }
    await updateEvaluation.execute(evalId, req.body);
    res.status(200).json({ message: 'Evaluation updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};