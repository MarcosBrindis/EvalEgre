import { Request, Response } from 'express';
import { GetEvidenceById } from '../../../application/usecase/GetEvidence';

export const getEvidenceByIdController = (getEvidenceById: GetEvidenceById) => async (req: Request, res: Response): Promise<void> => {
  try {
    const evidenceId = Number(req.params.id);
    const evidence = await getEvidenceById.execute(evidenceId);
    if (!evidence) {
      res.status(404).json({ message: 'Evidence not found' });
      return;
    }
    // Devuelve el archivo como descarga
    res.setHeader('Content-Disposition', `attachment; filename="${evidence.filename}"`);
    res.setHeader('Content-Type', evidence.mime_type);
    res.send(evidence.archivo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};