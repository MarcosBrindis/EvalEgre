import { Request, Response } from 'express';
import { GetAllEvidenceByProject } from '../../../application/usecase/GetAllEvidence';

export const getAllEvidenceByProjectController = (getAllEvidenceByProject: GetAllEvidenceByProject) => async (req: Request, res: Response): Promise<void> => {
  try {
    const projectId = Number(req.params.projectId);
    const evidences = await getAllEvidenceByProject.execute(projectId);
    res.status(200).json(evidences);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};