import { Request, Response } from 'express';
import { GetAllEducationalFields } from '../../../application/usecase/GetAllEducationalField';

export const getAllEducationalFieldsController = (getAllEducationalFields: GetAllEducationalFields) => async (_: Request, res: Response): Promise<void> => {
  try {
    const fields = await getAllEducationalFields.execute();
    res.status(200).json(fields);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener campos educacionales' });
  }
};