import { Request, Response } from 'express';
import { GetResponsesBySurvey } from '../../../application/usecase/GetResponsesBySurvey';

export const getResponsesBySurveyController = (getResponsesBySurvey: GetResponsesBySurvey) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const encuesta_id = parseInt(req.params.surveyId, 10);
    if (isNaN(encuesta_id)) {
      res.status(400).json({ message: 'Invalid survey ID' });
      return;
    }

    const responses = await getResponsesBySurvey.execute(encuesta_id);
    res.status(200).json(responses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};