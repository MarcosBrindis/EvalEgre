import cron from 'node-cron';
import { MySQLConnection } from '../db/mysql/connection';
import nodemailer from 'nodemailer';

export class CronNotificationService {
  static start() {
    cron.schedule('* * * * *', async () => {
      console.log('Ejecutando servicio de notificaciones...');
      await CronNotificationService.sendNotifications();
    });
  }

  static async sendNotifications(): Promise<void> {
    try {
      // Obtener encuestas que inician ahora
      const [surveys]: any = await MySQLConnection.execute(
        `SELECT * FROM Encuestas WHERE inicio <= NOW() AND inicio > DATE_SUB(NOW(), INTERVAL 1 MINUTE)`
      );

      for (const survey of surveys) {
        // Obtener usuarios según el tipo de encuesta
        const [users]: any = await MySQLConnection.execute(
          `SELECT id, email FROM Usuarios WHERE tipo = ?`, 
          [survey.tipo === 'egresado' ? 'Egresado' : 'Empleador']
        );

        for (const user of users) {
          // Crear notificación en la base de datos
          await MySQLConnection.execute(
            `INSERT INTO Notificaciones (usuario_id, encuesta_id, mensaje) VALUES (?, ?, ?)`,
            [
              user.id,
              survey.id,
              `Nueva encuesta disponible: ${survey.titulo}`,
            ]
          );

          // Enviar correo
          await CronNotificationService.sendEmail(
            user.email,
            'Nueva Encuesta Disponible',
            `Hola, tienes una nueva encuesta disponible: "${survey.titulo}".`,
            survey.id
          );
        }
      }
    } catch (error) {
      console.error('Error enviando notificaciones:', error);
    }
  }

  static async sendEmail(to: string, subject: string, text: string, surveyId: number): Promise<void> {
    const surveyLink = `http://localhost:8000/surveys/${surveyId}`; // Modificar cuando se despliegue por enlace del front de la encuesta, este es solo de prueba
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