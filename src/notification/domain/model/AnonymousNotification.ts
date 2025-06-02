export interface AnonymousNotification {
  id?: number;
  invitacion_id: number;
  encuesta_id: number;
  mensaje: string;
  enviada?: boolean;
  enviada_en?: Date;
}