import { EncryptionService } from '../../domain/port/EncryptionService';
import { BcryptMiddleware } from '../../../core/middleware/bcryptMiddleware';

export class BcryptEncryptionService implements EncryptionService {
    async hashPassword(password: string): Promise<string> {
      const hashedPassword = await BcryptMiddleware.hashPassword(password);
      return hashedPassword;
    }

  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return BcryptMiddleware.comparePassword(password, hashedPassword);
  }
}