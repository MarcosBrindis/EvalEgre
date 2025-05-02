export interface ResponseDetail {
  id?: number;
  respuesta_id: number;
  pregunta_id: number;
  valor_texto?: string;
  valor_numero?: number;
  creado_en?: Date;
}