export interface Evidence {
  id?: number;
  proyecto_id: number;
  archivo: Buffer; // Binario del archivo
  filename: string;
  mime_type: string;
  tipo_id: number;
  descripcion?: string;
  github_url?: string;
  subido_por?: number;
  creado_en?: Date;
  actualizado_en?: Date;
}