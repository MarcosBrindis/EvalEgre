import { Request, Response } from 'express';
import { CreateEvidence } from '../../../application/usecase/CreateEvidence';

export const createEvidenceController = (createEvidence: CreateEvidence) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { proyecto_id, filename, mime_type, tipo_id, descripcion } = req.body;
    const subido_por = (req as any).user?.id || null;
    const archivo = req.file?.buffer; // Si usas multer para subida de archivos

    if (!archivo) {
      res.status(400).json({ message: 'Archivo es requerido' });
      return;
    }
    const evidence = await createEvidence.execute({
      proyecto_id: Number(proyecto_id),
      archivo,
      filename,
      mime_type,
      tipo_id: Number(tipo_id),
      descripcion,
      subido_por
    });
    res.status(201).json(evidence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};