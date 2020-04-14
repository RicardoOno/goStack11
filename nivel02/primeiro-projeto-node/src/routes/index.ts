import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ msg: true });
});

routes.post('/user', (req, res) => {
  const { name, email } = req.body;

  const user = {
    name,
    email,
  };
  return res.json();
});

export default routes;
