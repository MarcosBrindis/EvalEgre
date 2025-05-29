import { Request, Response } from 'express';
import { DeleteEvaluation } from '../../../application/usecase/DeleteEvaluation';

export const deleteEvaluationController = (deleteEvaluation: DeleteEvaluation) => async (req: Request, res: Response): Promise<void> => {
  try {
    const evalId = parseInt(req.params.id, 10);
    if (isNaN(evalId)) {
      res.status(400).json({ message: 'Invalid evaluation ID' });
      return;
    }
    await deleteEvaluation.execute(evalId);
    res.status(200).json({ message: 'Evaluation deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};