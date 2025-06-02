import { Request, Response } from 'express';
import { FindInvitationsBySurvey } from '../../../application/usecase/FindInvitationsBySurvey';

export const findAnonymousInvitationsBySurveyController = (findBySurvey: FindInvitationsBySurvey) => async (req: Request, res: Response): Promise<void> => {
  try {
    const surveyId = Number(req.params.surveyId);
    const invitations = await findBySurvey.execute(surveyId);
    res.status(200).json(invitations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};