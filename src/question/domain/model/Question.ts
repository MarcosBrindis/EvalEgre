import { OptionQuestion } from './OptionQuestion';
export interface Question {
  id?: number;
  encuesta_id: number;
  tipo: 'multiple' | 'likert' | 'abierta';
  texto: string;
  orden: number;
  competencia_asociada?: string;
  opciones?: OptionQuestion[];
}