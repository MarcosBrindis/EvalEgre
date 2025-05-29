import { Request, Response } from 'express';
import { DeleteProject } from '../../../application/usecase/DeleteProject';

export const deleteProjectController = (deleteProject: DeleteProject) => async (req: Request, res: Response): Promise<void> => {
  try {
    const projectId = parseInt(req.params.id, 10);
    if (isNaN(projectId)) {
      res.status(400).json({ message: 'Invalid project ID' });
      return;
    }

    await deleteProject.execute(projectId);
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};