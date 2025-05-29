export interface Project {
  id?: number;
  egresado_id: number;
  titulo: string;
  descripcion?: string;
  estado?: 'en_revision' | 'evaluado' | 'archivado';
  creado_en?: Date;
  actualizado_en?: Date;
}