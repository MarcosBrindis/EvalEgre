import { SurveyRepository } from '../../../domain/port/SurveyRepository';
import { Survey } from '../../../domain/model/Survey';

export abstract class BaseSurveyRepository implements SurveyRepository {
  save(_survey: Omit<Survey, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Survey> {
    return Promise.reject(new Error('Method save not implemented'));
  }
  findById(_id: number): Promise<Survey | null> {
    return Promise.reject(new Error('Method findById not implemented'));
  }
  findAll(): Promise<Survey[]> {
    return Promise.reject(new Error('Method findAll not implemented'));
  }
  update(_id: number, _data: Partial<Survey>): Promise<void> {
    return Promise.reject(new Error('Method update not implemented'));
  }
  delete(_id: number): Promise<void> {
    return Promise.reject(new Error('Method delete not implemented'));
  }
}