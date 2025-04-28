import { UserRepository } from '../../domain/port/UserRepository';
import { User } from '../../domain/model/User';
import { EncryptionService } from '../../domain/port/EncryptionService';

export class CreateUser {
  constructor(private repo: UserRepository, private encryptionService: EncryptionService) {}

  async execute(data: Omit<User, 'id' | 'creado_en' | 'actualizado_en'>): Promise<User> {
    const userData = { ...data };
  
    if (!userData.oauth_uid) {
  
      if (!userData.password) throw new Error('password es obligatorio');
      userData.password_hash = await this.encryptionService.hashPassword(userData.password);
      delete userData.password;
    } else {
      userData.password_hash = null; 
    }
  
    return this.repo.save(userData);
  }
}