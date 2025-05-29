export interface EvaluationCriterion {
  criterio_id: number;
  puntuacion: number;
  comentario?: string;
}

export interface Evaluation {
  id?: number;
  proyecto_id: number;
  evaluador_id: number;
  creado_en?: Date;
  actualizado_en?: Date;
  criterios: EvaluationCriterion[];
}