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
    console.log(`Starting email campaign for survey ${encuesta_id}`);
    
    // Obtener todos los correos anónimos registrados
    const emails = await anonymousEmailDependencies.getAllAnonymousEmails.execute();
    console.log(`Found ${emails.length} email addresses`);

    const results: any[] = [];
    const errors: any[] = [];

    for (let i = 0; i < emails.length; i++) {
      const anonEmail = emails[i];
      console.log(`Processing email ${i + 1}/${emails.length}: ${anonEmail.email}`);
      
      try {
        // 1. Crear/buscar invitación anónima para cada correo
        let invitation = await invitationDependencies.findInvitationByEmailAndSurvey.execute(anonEmail.email, encuesta_id);
        if (!invitation) {
          const codigo = generateInvitationCode(Number(encuesta_id));
          invitation = await invitationDependencies.createAnonymousInvitation.execute({
            encuesta_id,
            codigo,
            email: anonEmail.email
          });
          console.log(`Created new invitation with code: ${invitation.codigo}`);
        } else {
          console.log(`Using existing invitation with code: ${invitation.codigo}`);
        }

        // 2. Crear notificación anónima
        const anonNotification = await createAnonymousNotification.execute({
          invitacion_id: invitation.id!,
          encuesta_id,
          mensaje
        });

        // 3. Enviar correo con URL completa
        const link = process.env.FRONT_URL || 'http://localhost:3000';
        await NotificationEmailService.sendEmail(
          anonEmail.email,
          'Invitación a Encuesta Anónima',
          `${mensaje}\n\nTu código de acceso: ${invitation.codigo}`,
          link
        );

        results.push({ email: anonEmail.email, codigo: invitation.codigo, notification: anonNotification, status: 'sent' });
        console.log(` Email sent successfully to: ${anonEmail.email}`);

        // Pequeño delay para evitar spam
        if (i < emails.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000)); 
        }
      } catch (emailError) {
        console.error(` Error processing ${anonEmail.email}:`, emailError);
        errors.push({ 
          email: anonEmail.email, 
          error: emailError instanceof Error ? emailError.message : 'Unknown error' 
        });
      }
    }

    console.log(`Campaign completed. Sent: ${results.length}, Errors: ${errors.length}`);
    res.status(200).json({ 
      sent: results.length, 
      errorsCount: errors.length,
      results, 
      failedEmails: errors.length > 0 ? errors : undefined 
    });
  } catch (error) {
    console.error('Critical error in email campaign:', error);
    res.status(500).json({ 
      message: 'Internal server error', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};