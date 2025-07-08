import { Request, Response } from 'express';
import { DeleteEducationalField } from '../../../application/usecase/DeleteEducationalField';

export const deleteEducationalFieldController = (deleteEducationalField: DeleteEducationalField) => async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await deleteEducationalField.execute(id);
    res.status(200).json({ message: 'Campo educacional eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar campo educacional' });
  }
};