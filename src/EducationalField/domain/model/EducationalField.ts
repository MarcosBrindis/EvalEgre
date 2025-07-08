export interface EducationalField {
  id?: number;
  numero: number; // 0-9
  nombre: string;
  descripcion?: string;
  is_active?: boolean;
  creado_en?: Date;
  actualizado_en?: Date;
}