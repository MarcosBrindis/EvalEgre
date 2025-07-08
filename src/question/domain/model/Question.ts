import { OptionQuestion } from './OptionQuestion';
export interface Question {
  id?: number;
  encuesta_id: number;
  tipo: 'multiple' | 'likert' | 'abierta';
  texto: string;
  orden: number;
  competencia_asociada?: string;
  campo_educacional_numero?: number; // 0-9, referencia a CamposEducacionales
  opciones?: OptionQuestion[];
}