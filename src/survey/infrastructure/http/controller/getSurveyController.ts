import { Request, Response } from 'express';
import { GetSurveyById } from '../../../application/usecase/GetSurvey';

export const getSurveyByIdController = (getSurveyById: GetSurveyById) => async (req: Request, res: Response): Promise<void> => {
  try {
    const surveyId = parseInt(req.params.id, 10);
    if (isNaN(surveyId)) {
      res.status(400).json({ message: 'Invalid survey ID' });
      return;
    }

    const survey = await getSurveyById.execute(surveyId);
    if (!survey) {
      res.status(404).json({ message: 'Survey not found' });
      return;
    }

    res.status(200).json(survey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error'});
  }
};