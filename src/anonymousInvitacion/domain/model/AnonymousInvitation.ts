export interface AnonymousInvitation {
  id?: number;
  encuesta_id: number;
  codigo: string;
  email?: string; // opcional
  respondido: boolean;
  respondido_en?: Date;
  creado_en?: Date;
}