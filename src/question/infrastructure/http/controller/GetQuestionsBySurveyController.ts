import { Request, Response } from 'express';
import { GetQuestionsBySurvey } from '../../../application/usecase/GetQuestionsBySurvey';

export const getQuestionsBySurveyController = (getQuestionsBySurvey: GetQuestionsBySurvey) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const encuesta_id = parseInt(req.params.surveyId, 10);
    if (isNaN(encuesta_id)) {
      res.status(400).json({ message: 'Invalid survey ID' });
      return;
    }

    const questions = await getQuestionsBySurvey.execute(encuesta_id);
    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};