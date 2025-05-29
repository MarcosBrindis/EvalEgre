import { Request, Response } from 'express';
import { GetEvaluationById } from '../../../application/usecase/GetEvaluationById';

export const getEvaluationByIdController = (getEvaluationById: GetEvaluationById) => async (req: Request, res: Response): Promise<void> => {
  try {
    const evalId = parseInt(req.params.id, 10);
    if (isNaN(evalId)) {
      res.status(400).json({ message: 'Invalid evaluation ID' });
      return;
    }
    const evaluation = await getEvaluationById.execute(evalId);
    if (!evaluation) {
      res.status(404).json({ message: 'Evaluation not found' });
      return;
    }
    res.status(200).json(evaluation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};