import { Request, Response } from 'express';
import { UpdateProject } from '../../../application/usecase/UpdateProject';

export const updateProjectController = (updateProject: UpdateProject) => async (req: Request, res: Response): Promise<void> => {
  try {
    const projectId = parseInt(req.params.id, 10);
    if (isNaN(projectId)) {
      res.status(400).json({ message: 'Invalid project ID' });
      return;
    }

    await updateProject.execute(projectId, req.body);
    res.status(200).json({ message: 'Project updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};