import { Request, Response } from 'express';
import { UpdateQuestion } from '../../../application/usecase/UpdateQuestion';

export const updateQuestionController = (updateQuestion: UpdateQuestion) => async (req: Request, res: Response): Promise<void> => {
  try {
    const questionId = parseInt(req.params.questionId, 10);
    if (isNaN(questionId)) {
      res.status(400).json({ message: 'Invalid question ID' });
      return;
    }

    await updateQuestion.execute({ ...req.body.question, id: questionId }, req.body.options);
    res.status(200).json({ message: 'Pregunta actualizada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ 
      message: error instanceof Error ? error.message : 'Error al actualizar la pregunta' 
    });
  }
};