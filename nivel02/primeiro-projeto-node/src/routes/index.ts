import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ msg: true });
})

export default routes;
