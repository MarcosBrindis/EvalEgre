import { Request, Response } from 'express';
import { GetEducationalFieldById } from '../../../application/usecase/GetEducationalFieldById';

export const getEducationalFieldByIdController = (getEducationalFieldById: GetEducationalFieldById) => async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const field = await getEducationalFieldById.execute(id);
    if (!field) {
      res.status(404).json({ message: 'Campo educacional no encontrado' });
      return;
    }
    res.status(200).json(field);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener campo educacional' });
  }
};