import { Request, Response } from 'express';
import { FindInvitationByCode } from '../../../application/usecase/FindInvitationByCode';

export const findAnonymousInvitationByCodeController = (findByCode: FindInvitationByCode) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { code } = req.params;
    const invitation = await findByCode.execute(code);
    if (!invitation) {
      res.status(404).json({ message: 'Invitation not found' });
      return;
    }
    res.status(200).json(invitation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};