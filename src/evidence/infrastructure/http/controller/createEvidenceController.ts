import { Request, Response } from 'express';
import { CreateEvidence } from '../../../application/usecase/CreateEvidence';

export const createEvidenceController = (createEvidence: CreateEvidence) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { proyecto_id, filename, mime_type, tipo_id, descripcion, github_url } = req.body;
    const subido_por = (req as any).user?.id || null;
    const archivo = req.file?.buffer; // Si usas multer para subida de archivos

    if (!archivo && !github_url) {
      res.status(400).json({ message: 'Debe proporcionar un archivo o una URL de GitHub' });
      return;
    }
    const evidenceData: any = {
      proyecto_id: Number(proyecto_id),
      tipo_id: Number(tipo_id),
      descripcion,
      subido_por
    };
    // Si hay archivo
    if (archivo) {
      evidenceData.archivo = archivo;
      evidenceData.filename = filename || req.file?.originalname;
      evidenceData.mime_type = mime_type || req.file?.mimetype;
    }
    // Si hay GitHub URL
    if (github_url) {
      evidenceData.github_url = github_url;
    }
    const evidence = await createEvidence.execute(evidenceData);
    res.status(201).json(evidence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};