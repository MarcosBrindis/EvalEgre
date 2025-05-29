import { Request, Response } from 'express';
import { DeleteEvidence } from '../../../application/usecase/DeleteEvidence';

export const deleteEvidenceController = (deleteEvidence: DeleteEvidence) => async (req: Request, res: Response): Promise<void> => {
  try {
    const evidenceId = Number(req.params.id);
    await deleteEvidence.execute(evidenceId);
    res.status(200).json({ message: 'Evidence deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};