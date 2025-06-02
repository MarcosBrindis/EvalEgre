import { Request, Response, NextFunction } from 'express';
import { FindInvitationByCode } from '../../anonymousInvitacion/application/usecase/FindInvitationByCode';

export function makeAnonymousInvitationMiddleware(findByCode: FindInvitationByCode) {
  return async function verifyCode(req: Request, res: Response, next: NextFunction) {
    const code = req.headers['x-invitation-code'] || req.body.code || req.query.code;
    if (!code || typeof code !== 'string') {
      res.status(401).json({ error: 'Código de invitación no proporcionado' });
      return;
    }
    try {
      const invitation = await findByCode.execute(code as string);
      if (!invitation) {
        res.status(404).json({ error: 'Código de invitación inválido' });
        return;
      }
      if (invitation.respondido) {
        res.status(403).json({ error: 'Este código ya fue utilizado' });
        return;
      }
      (req as any).anonymousInvitation = invitation;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error validando el código de invitación' });
    }
  };
}