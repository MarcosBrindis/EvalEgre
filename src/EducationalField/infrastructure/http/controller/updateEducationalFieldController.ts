import { Request, Response } from 'express';
import { UpdateEducationalField } from '../../../application/usecase/UpdateEducationalField';

export const updateEducationalFieldController = (updateEducationalField: UpdateEducationalField) => async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await updateEducationalField.execute(id, req.body);
    res.status(200).json({ message: 'Campo educacional actualizado' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error instanceof Error ? error.message : 'Error al actualizar campo educacional' });
  }
};