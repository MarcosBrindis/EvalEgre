import { Request, Response } from 'express';
import { GetQuestionById } from '../../../application/usecase/GetQuestionById';

export const getQuestionByIdController = (getQuestionById: GetQuestionById) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const questionId = parseInt(req.params.id, 10);
    if (isNaN(questionId)) {
      res.status(400).json({ message: 'Invalid question ID' });
      return;
    }

    const question = await getQuestionById.execute(questionId);
    if (!question) {
      res.status(404).json({ message: 'Question not found' });
      return;
    }

    res.status(200).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};