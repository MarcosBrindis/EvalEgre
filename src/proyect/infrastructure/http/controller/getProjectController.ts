import { Request, Response } from 'express';
import { GetProjectById } from '../../../application/usecase/GetProject';

export const getProjectByIdController = (getProjectById: GetProjectById) => async (req: Request, res: Response): Promise<void> => {
  try {
    const projectId = parseInt(req.params.id, 10);
    if (isNaN(projectId)) {
      res.status(400).json({ message: 'Invalid project ID' });
      return;
    }

    const project = await getProjectById.execute(projectId);
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }

    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};