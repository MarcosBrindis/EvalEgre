import jwt from 'jsonwebtoken';

export interface AuthService {
  generateToken(payload: object): string;
  verifyToken(token: string): string | jwt.JwtPayload | null; // Actualizado
  verifyPassword(password: string, hashedPassword: string): Promise<boolean>;
}