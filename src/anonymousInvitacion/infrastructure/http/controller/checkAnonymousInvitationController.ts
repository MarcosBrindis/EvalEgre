import { Request, Response } from 'express';
import { FindInvitationByCode } from '../../../application/usecase/FindInvitationByCode';

export const checkAnonymousInvitationController = (findByCode: FindInvitationByCode) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { code } = req.params;
    const invitation = await findByCode.execute(code);
    if (!invitation) {
      res.status(200).json({ exists: false });
      return;
    }
    res.status(200).json({
      exists: true,
      responded: invitation.respondido,
      invitation
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};