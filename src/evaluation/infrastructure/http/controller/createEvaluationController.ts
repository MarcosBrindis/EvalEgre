import { Request, Response } from 'express';
import { CreateEvaluation } from '../../../application/usecase/CreateEvaluation';

export const createEvaluationController = (createEvaluation: CreateEvaluation) => async (req: Request, res: Response): Promise<void> => {
  try {
    const evaluador_id = (req as any).user?.id;
    const evaluation = await createEvaluation.execute({ ...req.body, evaluador_id });
    res.status(201).json(evaluation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};