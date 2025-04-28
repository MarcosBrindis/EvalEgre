export interface User {
    id: number;
    tipo: 'Egresado' | 'Empleador' | 'Administrador';
    nombre: string;
    email: string;
    password_hash: string | null;
    password?: string; 
    telefono?: string;
    fecha_nacimiento?: Date;
    is_active: boolean;
    habilidades?: string;
    experiencia?: string;
    oauth_uid?: string;
    profile_picture?: string;
    creado_en: Date;
    actualizado_en: Date;
  }