import { Response } from 'express';
import { GetAllProjects } from '../../../application/usecase/GetAllProjects';

export const getAllProjectsController = (getAllProjects: GetAllProjects) => async (_: unknown, res: Response): Promise<void> => {
  try {
    const projects = await getAllProjects.execute();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};