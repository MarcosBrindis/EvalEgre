import { Response } from 'express';
import { GetAllSurveys } from '../../../application/usecase/GetAllSurvey';

export const getAllSurveysController = (getAllSurveys: GetAllSurveys) => async (_: unknown, res: Response): Promise<void> => {
  try {
    const surveys = await getAllSurveys.execute();
    res.status(200).json(surveys);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};