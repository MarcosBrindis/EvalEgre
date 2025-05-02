import { Request, Response } from 'express';
import { UpdateResponse } from '../../../application/usecase/UpdateResponse';

export const updateResponseController = (updateResponse: UpdateResponse) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const encuestaId = Number(req.params.id);
    if (!encuestaId) {
      res.status(400).json({ message: 'Falta parámetro :id en la ruta (encuestaId)' });
      return;
    }
    const { details } = req.body;
    if (!details || !Array.isArray(details)) {
      res.status(400).json({ message: 'El body debe contener un array "details"' });
      return;
    }
    const user = (req as any).user;
    if (!user?.id) {
      res.status(401).json({ message: 'Usuario no autenticado' });
      return;
    }
    await updateResponse.execute(encuestaId, user.id, details);
    res.status(200).json({ message: 'Respuestas actualizadas correctamente' });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message || 'Error interno' });
  }
};