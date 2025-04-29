import { Request, Response } from 'express';
import { UpdateSurvey } from '../../../application/usecase/UpdateSurvey';

export const updateSurveyController = (updateSurvey: UpdateSurvey) => async (req: Request, res: Response): Promise<void> => {
  try {
    const surveyId = parseInt(req.params.id, 10);
    if (isNaN(surveyId)) {
      res.status(400).json({ message: 'Invalid survey ID' });
      return;
    }

    await updateSurvey.execute(surveyId, req.body);
    res.status(200).json({ message: 'Survey updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};