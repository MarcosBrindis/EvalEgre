import { Request, Response } from 'express';
import { GetAllAnonymousEmails } from '../../../application/usecase/GetAllAnonymousEmails';

export const getAllAnonymousEmailsController = (getAllAnonymousEmails: GetAllAnonymousEmails) => async (_: Request, res: Response): Promise<void> => {
  try {
    const anonEmails = await getAllAnonymousEmails.execute();
    res.status(200).json(anonEmails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};