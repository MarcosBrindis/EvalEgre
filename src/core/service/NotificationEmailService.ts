import nodemailer from 'nodemailer';

export class NotificationEmailService {
  static async sendEmail(to: string, subject: string, text: string, surveyLink?: string): Promise<void> {
    try {
      const emailBody = surveyLink ? `${text}\n\nPuedes acceder a la encuesta aquí: ${surveyLink}` : text;
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const result = await transporter.sendMail({
        from: `"Sistema de Encuestas" <${process.env.EMAIL_USER}>`, // ✅ Usar el email real del .env
        to,
        subject,
        text: emailBody,
      });

      console.log('Email sent successfully to:', to, 'MessageId:', result.messageId);
    } catch (error) {
      console.error('Error sending email to:', to, error);
      throw error; // Re-lanzar el error para manejarlo en el controlador
    }
  }
}