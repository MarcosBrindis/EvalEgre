import jwt from 'jsonwebtoken';
import { AuthService } from '../../domain/port/AuthService';
import { BcryptMiddleware } from '../../../core/middleware/bcryptMiddleware';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key';

export class JwtAuthService implements AuthService {
  generateToken(payload: object): string {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  }

  verifyToken(token: string): string | jwt.JwtPayload | null {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch (error) {
      console.error('JwtAuthService: Error verificando el token:', error);
      return null;
    }
  }

  async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return BcryptMiddleware.comparePassword(password, hashedPassword);
  }
}