export interface Survey {
  id?: number;
  titulo: string;
  descripcion?: string;
  tipo: 'egresado' | 'empleador' | 'autoevaluacion';
  anonima: boolean;
  inicio?: Date;
  fin?: Date;
  creado_por: number; 
  creado_en?: Date;
  actualizado_en?: Date;
}