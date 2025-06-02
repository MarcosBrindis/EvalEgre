import { User } from '../model/User';

export interface UserRepository {
  save(user: Omit<User, 'id' | 'creado_en' | 'actualizado_en'>): Promise<User>;
  findById(id: number): Promise<User | null>;
  findByOAuthUid(uid: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>; 
  update(id: number, data: Partial<User>): Promise<void>;
  delete(id: number): Promise<void>;
  findAll(): Promise<User[]>; 
}