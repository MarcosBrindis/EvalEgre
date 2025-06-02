export interface Notification {
  id?: number;
  usuario_id: number;
  encuesta_id: number;
  mensaje: string;
  leida?: boolean;
  respondida?: boolean;
  enviada_en?: Date;
}