import { Request, Response } from 'express';
import { CreateProject } from '../../../application/usecase/CreateProject';

export const createProjectController = (createProject: CreateProject) => async (req: Request, res: Response): Promise<void> => {
  try {
    const egresado_id = (req as any).user.id;
    const project = await createProject.execute({ ...req.body, egresado_id });
    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};