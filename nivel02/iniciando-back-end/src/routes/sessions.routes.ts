import { Router } from 'express';

import AuthenticationUserService from '../services/AuthenticationUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const session = new AuthenticationUserService();

    const { user } = await session.execute({ email, password });

    delete user.password;

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
