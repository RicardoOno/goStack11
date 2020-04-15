import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

// SoC: Separation of Concers (Separação de preocupação)

appointmentsRouter.get('/', (req, res) => {
  const repositories = appointmentsRepository.all();
  return res.json(repositories);
});

// Como já foi definido a rota, não há necessidade de add toda a rota /appointments/, e sim só o /
appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  // zerando os minutos e segundos
  const parseDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parseDate,
  );

  if (findAppointmentInSameDate) {
    return res
      .status(400)
      .json({ error: 'This appointment is already booked' });
  }

  const appointment = appointmentsRepository.create(provider, parseDate);

  return res.status(200).json(appointment);
});

export default appointmentsRouter;
