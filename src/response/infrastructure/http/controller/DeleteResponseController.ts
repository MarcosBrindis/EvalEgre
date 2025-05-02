import { Request, Response } from 'express';
import { DeleteResponse } from '../../../application/usecase/DeleteResponse';

export const deleteResponseController = (deleteResponse: DeleteResponse) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const responseId = parseInt(req.params.id, 10);

    if (isNaN(responseId)) {
      res.status(400).json({ message: 'Invalid response ID' });
      return;
    }

    await deleteResponse.execute(responseId);
    res.status(200).json({ message: 'Response deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message:'Internal server error' });
  }
};