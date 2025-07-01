import { UserRepository } from '../../domain/port/UserRepository';
import { User } from '../../domain/model/User';
import { EncryptionService } from '../../domain/port/EncryptionService';

export class UpdateUser {
  constructor(
    private repo: UserRepository, 
    private encryptionService: EncryptionService
  ) {}

  async execute(id: number, data: Partial<User>): Promise<void> {
    const updateData = { ...data };
    
    if (updateData.password) {
      updateData.password_hash = await this.encryptionService.hashPassword(updateData.password);
      delete updateData.password; 
    }

    await this.repo.update(id, updateData);
  }
}