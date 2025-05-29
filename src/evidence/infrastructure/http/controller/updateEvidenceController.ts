import { Request, Response } from 'express';
import { UpdateEvidence } from '../../../application/usecase/UpdateEvidence';

export const updateEvidenceController = (updateEvidence: UpdateEvidence) => async (req: Request, res: Response): Promise<void> => {
  try {
    const evidenceId = parseInt(req.params.id, 10);
    if (isNaN(evidenceId)) {
      res.status(400).json({ message: 'Invalid evidence ID' });
      return;
    }

    // Si usas multer, req.file puede existir
    let updateData: any = { ...req.body };
    if (req.file) {
      updateData.archivo = req.file.buffer;
      updateData.filename = req.file.originalname;
      updateData.mime_type = req.file.mimetype;
    }

    // Elimina campos vacíos
    Object.keys(updateData).forEach(key => {
      if (updateData[key] === undefined || updateData[key] === null || updateData[key] === '') {
        delete updateData[key];
      }
    });

    if (Object.keys(updateData).length === 0) {
      res.status(400).json({ message: 'No data provided to update' });
      return;
    }

    await updateEvidence.execute(evidenceId, updateData);
    res.status(200).json({ message: 'Evidence updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};