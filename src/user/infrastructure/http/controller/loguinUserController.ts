import { Request, Response } from 'express';
import { LoginUser } from '../../../application/usecase/LoguinUser';

export const loginController = (loginUser: LoginUser) => async (req: Request, res: Response) => {
  try {
    const { email, password, oauth_uid } = req.body;
    const { token, payload } = await loginUser.execute({ email, password, oauth_uid });
    res.status(200).json({ token, payload });
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({ error: error.message });
    } else {
      res.status(401).json({ error: 'Error desconocido' });
    }
  }
};