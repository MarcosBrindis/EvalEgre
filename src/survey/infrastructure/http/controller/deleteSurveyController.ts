import { Request, Response } from 'express';
import { DeleteSurvey } from '../../../application/usecase/DeleteSurvey';

export const deleteSurveyController = (deleteSurvey: DeleteSurvey) => async (req: Request, res: Response): Promise<void> => {
  try {
    const surveyId = parseInt(req.params.id, 10);
    if (isNaN(surveyId)) {
      res.status(400).json({ message: 'Invalid survey ID' });
      return;
    }

    await deleteSurvey.execute(surveyId);
    res.status(200).json({ message: 'Survey deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error'});
  }
};