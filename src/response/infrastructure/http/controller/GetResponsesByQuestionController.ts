import { Request, Response } from 'express';
import { GetResponsesByQuestion } from '../../../application/usecase/GetResponsesByQuestion';

export const getResponsesByQuestionController = (getResponsesByQuestion: GetResponsesByQuestion) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const questionId = parseInt(req.params.questionId, 10);

    if (isNaN(questionId)) {
      res.status(400).json({ message: 'Invalid question ID' });
      return;
    }

    const responseDetails = await getResponsesByQuestion.execute(questionId);
    res.status(200).json(responseDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};