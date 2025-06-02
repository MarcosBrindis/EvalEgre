import { AnonymousEmail } from '../model/AnonymousEmail';

export interface AnonymousEmailRepository {
  create(email: Omit<AnonymousEmail, 'id' | 'creado_en' | 'actualizado_en'>): Promise<AnonymousEmail>;
  update(id: number, data: Partial<AnonymousEmail>): Promise<void>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<AnonymousEmail | null>;
  findAll(): Promise<AnonymousEmail[]>;
}