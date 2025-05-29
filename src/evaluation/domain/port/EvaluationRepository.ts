import { Evaluation } from '../model/Evaluation';

export interface EvaluationRepository {
  save(evaluation: Omit<Evaluation, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Evaluation>;
  findById(id: number): Promise<Evaluation | null>;
  findAll(): Promise<Evaluation[]>;
  update(id: number, data: Partial<Omit<Evaluation, 'id' | 'creado_en' | 'actualizado_en'>>): Promise<void>;
  delete(id: number): Promise<void>;
}