import { Request, Response } from 'express';
import { CreateAnonymousNotification } from '../../../application/usecase/CreateAnonymousNotification';
import { dependencies as anonymousEmailDependencies } from '../../../../anonymous-email/infrastructure/dependencies';
import { dependencies as invitationDependencies } from '../../../../anonymousInvitacion/infrastructure/dependencies';
import { NotificationEmailService } from '../../../../core/service/NotificationEmailService';

function generateInvitationCode(encuesta_id: number): string {
  const encuestaPart = encuesta_id.toString().padStart(4, '0');
  const now = new Date();
  const datePart = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}`;
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `${encuestaPart}-${datePart}-${randomPart}`;
}

export const createAnonymousNotificationsController = (createAnonymousNotification: CreateAnonymousNotification) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { encuesta_id, mensaje } = req.body;
    // Obtener todos los correos anónimos registrados
    const emails = await anonymousEmailDependencies.getAllAnonymousEmails.execute();

    const results: any[] = [];

    for (const anonEmail of emails) {
      // 1. Crear/buscar invitación anónima para cada correo
      let invitation = await invitationDependencies.findInvitationByEmailAndSurvey.execute(anonEmail.email, encuesta_id);
      if (!invitation) {
        const codigo = generateInvitationCode(Number(encuesta_id));
        invitation = await invitationDependencies.createAnonymousInvitation.execute({
          encuesta_id,
          codigo,
          email: anonEmail.email
        });
      }

      // 2. Crear notificación anónima
      const anonNotification = await createAnonymousNotification.execute({
        invitacion_id: invitation.id!,
        encuesta_id,
        mensaje
      });

      // 3. Enviar correo
      const link = `${process.env.FRONT_URL || 'https://tudominio.com'}/encuesta/${encuesta_id}?code=${invitation.codigo}`;
      await NotificationEmailService.sendEmail(
        anonEmail.email,
        'Encuesta Anónima',
        mensaje + `\nTu código: ${invitation.codigo}`,
        link
      );

      results.push({ email: anonEmail.email, codigo: invitation.codigo, notification: anonNotification });
    }

    res.status(200).json({ sent: results.length, results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};