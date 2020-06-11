import { Router } from 'express';

import AuthenticationUserService from '../services/AuthenticationUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const session = new AuthenticationUserService();

  const { user, token } = await session.execute({ email, password });

  delete user.password;

  return res.status(200).json({ user, token });
});

export default sessionsRouter;
