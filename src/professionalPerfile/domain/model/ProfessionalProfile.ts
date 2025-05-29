export interface ProfessionalProfile {
  id?: number;
  usuario_id: number;
  resumen?: string;
  formacion?: any; // JSON
  experiencias?: any; // JSON
  competencias?: any; // JSON
  linkedin_url?: string;
  creado_en?: Date;
  actualizado_en?: Date;
}