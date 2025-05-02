import { Request, Response } from 'express';
import { CreateResponse } from '../../../application/usecase/CreateResponse';

export const createResponseController = (createResponse: CreateResponse) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { response, details } = req.body;

    if (!response || !details) {
      res.status(400).json({ message: 'Invalid request body' });
      return;
    }
    const user = (req as any).user; 
    if (!user || !user.id) {
      res.status(401).json({ message: 'Unauthorized: User not authenticated' });
      return;
    }
    response.usuario_id = user.id;

    const responseId = await createResponse.execute(response, details);
    res.status(201).json({ responseId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};