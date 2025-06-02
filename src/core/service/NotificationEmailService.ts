import nodemailer from 'nodemailer';

export class NotificationEmailService {
  static async sendEmail(to: string, subject: string, text: string, surveyLink: string): Promise<void> {
    const emailBody = `${text}\n\nPuedes acceder a la encuesta aquí: ${surveyLink}`;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: '"Sistema de Encuestas" <tu-email@gmail.com>',
      to,
      subject,
      text: emailBody,
    });
  }
}