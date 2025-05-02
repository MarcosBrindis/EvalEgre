import { Request, Response } from 'express';
import { CreateQuestion } from '../../../application/usecase/CreateQuestion';

export const createQuestionController = (createQuestion: CreateQuestion) => async (req: Request, res: Response): Promise<void> => {
  try {
    const question = await createQuestion.execute(req.body.question, req.body.options);
    res.status(201).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};