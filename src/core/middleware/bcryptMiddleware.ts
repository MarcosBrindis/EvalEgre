import * as bcrypt from 'bcrypt';
const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10);

export const BcryptMiddleware = {
    async hashPassword(password: string): Promise<string> {
      try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
      } catch (error) {
        console.error('BcryptMiddleware: Error hashing password:', error);
        throw error;
      }
    },
  
    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
      return bcrypt.compare(password, hashedPassword);
    },
  };