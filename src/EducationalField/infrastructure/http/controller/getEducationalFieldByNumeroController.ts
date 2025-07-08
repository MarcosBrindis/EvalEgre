import { Request, Response } from 'express';
import { GetEducationalFieldByNumero } from '../../../application/usecase/GetEducationalFieldByNumero';

export const getEducationalFieldByNumeroController = (getEducationalFieldByNumero: GetEducationalFieldByNumero) => async (req: Request, res: Response): Promise<void> => {
  try {
    const numero = Number(req.params.numero);
    const field = await getEducationalFieldByNumero.execute(numero);
    if (!field) {
      res.status(404).json({ message: 'Campo educacional no encontrado' });
      return;
    }
    res.status(200).json(field);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error instanceof Error ? error.message : 'Error al obtener campo educacional' });
  }
};
