import { Request, Response } from 'express';
import { DeleteQuestion } from '../../../application/usecase/DeleteQuestion';

export const deleteQuestionController = (deleteQuestion: DeleteQuestion) => async (req: Request, res: Response): Promise<void> => {
  try {
    const questionId = parseInt(req.params.questionId, 10);
    if (isNaN(questionId)) {
      res.status(400).json({ message: 'Invalid question ID' });
      return;
    }

    await deleteQuestion.execute(questionId);
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};