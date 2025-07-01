import { Request, Response } from 'express';
import { CreateResponse } from '../../../application/usecase/CreateResponse';

export const createAnonymousResponseController = (createResponse: CreateResponse) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { response, details } = req.body;

    if (!response || !details) {
      res.status(400).json({ message: 'Invalid request body' });
      return;
    }

    const responseId = await createResponse.execute(response, details);
    res.status(201).json({ responseId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};