import { Request, Response } from 'express';
import { CreateCriterion } from '../../../application/usecase/CreateCriterion';

export const createCriterionController = (createCriterion: CreateCriterion) => async (req: Request, res: Response): Promise<void> => {
  try {
    const criterion = await createCriterion.execute(req.body);
    res.status(201).json(criterion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};