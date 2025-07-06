import { UserRepository } from '../../domain/port/UserRepository';
import { AuthService } from '../../domain/port/AuthService';

export class LoginUser {
  constructor(private repo: UserRepository, private authService: AuthService) {}

  async execute(data: { email?: string; password?: string; oauth_uid?: string }): Promise<{ token: string; payload: object }> {
    let user;

    // Login con oauth_uid
    if (data.oauth_uid) {
      user = await this.repo.findByOAuthUid(data.oauth_uid);
      if (!user) throw new Error('Usuario no encontrado con oauth_uid');
    } 
    // Login con email y contraseña
    else if (data.email && data.password) {
      user = await this.repo.findByEmail(data.email);
      if (!user) throw new Error('Usuario no encontrado con email');

      // Verificar la contraseña
      if (!user.password_hash) {
        throw new Error('El usuario no tiene una contraseña configurada');
      }
      
      const isPasswordValid = await this.authService.verifyPassword(data.password, user.password_hash);
      if (!isPasswordValid) throw new Error('Contraseña incorrecta');
    } else {
      throw new Error('Debe proporcionar email y contraseña o oauth_uid');
    }

    // Crear el payload
    const payload = {
      id: user.id,
      email: user.email,
      tipo: user.tipo,
      profile_picture: user.profile_picture,
    };

    // Generar el token
    const token = this.authService.generateToken(payload);

    // Retornar el token y el payload
    return { token, payload };
  }
}