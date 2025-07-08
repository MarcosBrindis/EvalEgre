import { Request, Response } from 'express';
import { CreateEducationalField } from '../../../application/usecase/CreateEducationalField';

export const createEducationalFieldController = (createEducationalField: CreateEducationalField) => async (req: Request, res: Response): Promise<void> => {
  try {
    const { numero, nombre, descripcion } = req.body;
    const field = await createEducationalField.execute({ numero, nombre, descripcion });
    res.status(201).json(field);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error instanceof Error ? error.message : 'Error al crear campo educacional' });
  }
};