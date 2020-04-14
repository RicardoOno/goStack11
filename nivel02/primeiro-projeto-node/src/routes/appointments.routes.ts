import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

const appointments = [];

// Como já foi definido a rota, não há necessidade de add toda a rota /appointments/, e sim só o /
appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const appointment = { id: uuid(), provider, date };

  appointments.push(appointment);

  return res.status(200).json(appointment);
});

export default appointmentsRouter;
