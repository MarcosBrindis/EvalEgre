import { Request, Response } from 'express';
import { MarkInvitationAsResponded } from '../../../application/usecase/MarkInvitationAsResponded';

export const markAnonymousInvitationAsRespondedController = (markAsResponded: MarkInvitationAsResponded) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { code } = req.params; 
    await markAsResponded.execute(code);
    res.status(200).json({ message: 'Invitation marked as responded' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};