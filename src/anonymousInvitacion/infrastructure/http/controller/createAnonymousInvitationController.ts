import { Request, Response } from 'express';
import { CreateAnonymousInvitation } from '../../../application/usecase/CreateAnonymousInvitation';

function generateInvitationCode(encuesta_id: number): string {
  const encuestaPart = encuesta_id.toString().padStart(4, '0');
  const now = new Date();
  const datePart = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}`;
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `${encuestaPart}-${datePart}-${randomPart}`;
}

export const createAnonymousInvitationController = (createAnonymousInvitation: CreateAnonymousInvitation) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { encuesta_id, email } = req.body;
    const codigo = generateInvitationCode(Number(encuesta_id));
    const invitation = await createAnonymousInvitation.execute({ encuesta_id, codigo, email });
    res.status(201).json(invitation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};