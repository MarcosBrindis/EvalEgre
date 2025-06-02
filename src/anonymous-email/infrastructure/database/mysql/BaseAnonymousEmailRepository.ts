import { AnonymousEmailRepository } from '../../../domain/port/AnonymousEmailRepository';
import { AnonymousEmail } from '../../../domain/model/AnonymousEmail';

export abstract class BaseAnonymousEmailRepository implements AnonymousEmailRepository {
  create(_email: Omit<AnonymousEmail, 'id' | 'creado_en' | 'actualizado_en'>): Promise<AnonymousEmail> {
    return Promise.reject(new Error('Method not implemented'));
  }
  update(_id: number, _data: Partial<AnonymousEmail>): Promise<void> {
    return Promise.reject(new Error('Method not implemented'));
  }
  delete(_id: number): Promise<void> {
    return Promise.reject(new Error('Method not implemented'));
  }
  findById(_id: number): Promise<AnonymousEmail | null> {
    return Promise.reject(new Error('Method not implemented'));
  }
  findAll(): Promise<AnonymousEmail[]> {
    return Promise.reject(new Error('Method not implemented'));
  }
}