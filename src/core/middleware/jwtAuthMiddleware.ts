import { Request, Response, NextFunction } from 'express';
import { JwtAuthService } from '../../user/infrastructure/service/JwtAuthService';

const authService = new JwtAuthService();

export const AuthMiddleware = {
  verifyToken(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).json({ error: 'Token no proporcionado' });
      return;
    }

    try {
      const decoded = authService.verifyToken(token);
      if (!decoded) {
        res.status(401).json({ error: 'Token inválido' });
        return;
      }
      (req as any).user = decoded; 
      next();
    } catch (error) {
      res.status(401).json({ error: 'Token inválido' });
    }
  },
};