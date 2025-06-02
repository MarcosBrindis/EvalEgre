import { UserRepository } from '../../../../user/domain/port/UserRepository';
import { User } from '../../../../user/domain/model/User';


export abstract class BaseUserRepository implements UserRepository {
  save(_user: Omit<User, 'id'|'creado_en'|'actualizado_en'>): Promise<User> {
    return Promise.reject(new Error('Method save not implemented'));
  }
  findById(_id: number): Promise<User | null> {
    return Promise.reject(new Error('Method findById not implemented'));
  }
  findByOAuthUid(_uid: string): Promise<User | null> {
    return Promise.reject(new Error('Method findByOAuthUid not implemented'));
  }
  findByEmail(_email: string): Promise<User | null> {
    return Promise.reject(new Error('Method findByEmail not implemented')); // Nuevo método
  }
  update(_id: number, _data: Partial<User>): Promise<void> {
    return Promise.reject(new Error('Method update not implemented'));
  }
  delete(_id: number): Promise<void> {
    return Promise.reject(new Error('Method delete not implemented'));
  }
  findAll(): Promise<User[]> {
    return Promise.reject(new Error('Method findAll not implemented'));
  }
}