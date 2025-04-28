import { Request, Response, NextFunction } from 'express';

export class AuthorizationService {
    static isOwner(req: Request, resourceId: number): boolean {
      const user = (req as any).user;
      return user.id === resourceId;
    }
  
    static hasRole(req: Request, roles: string[]): boolean {
      const user = (req as any).user;
      return roles.includes(user.tipo);
    }
  
    static isOwnerOrHasRole(req: Request, resourceId: number, roles: string[]): boolean {
      return (
        AuthorizationService.isOwner(req, resourceId) || 
        AuthorizationService.hasRole(req, roles)         
      );
    }
  
    static verifyOwnership(req: Request, res: Response, next: NextFunction): void {
      const resourceId = parseInt(req.params.id, 10);
      if (!AuthorizationService.isOwner(req, resourceId)) { 
        res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
        return;
      }
      next();
    }
  
    static verifyRole(roles: string[]) { 
      return (req: Request, res: Response, next: NextFunction) => {
        if (!AuthorizationService.hasRole(req, roles)) { 
          res.status(403).json({ error: 'No tienes el rol necesario' });
          return;
        }
        next();
      };
    }
  
    static verifyOwnershipOrRole(roles: string[]) { 
      return (req: Request, res: Response, next: NextFunction) => {
        const resourceId = parseInt(req.params.id, 10);
        if (!AuthorizationService.isOwnerOrHasRole(req, resourceId, roles)) { 
          res.status(403).json({ error: 'No tienes permiso' });
          return;
        }
        next();
      };
    }
  }