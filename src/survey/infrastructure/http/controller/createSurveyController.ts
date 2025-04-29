import { Request, Response } from 'express';
import { CreateSurvey } from '../../../application/usecase/CreateSurvey';

export const createSurveyController = (createSurvey: CreateSurvey) => async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.id; 
    const survey = await createSurvey.execute(req.body, userId);
    res.status(201).json(survey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error'});
  }
};