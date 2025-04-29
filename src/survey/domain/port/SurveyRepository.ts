import { Survey } from '../model/Survey';

export interface SurveyRepository {
  save(survey: Omit<Survey, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Survey>;
  findById(id: number): Promise<Survey | null>;
  findAll(): Promise<Survey[]>;
  update(id: number, data: Partial<Survey>): Promise<void>;
  delete(id: number): Promise<void>;
}