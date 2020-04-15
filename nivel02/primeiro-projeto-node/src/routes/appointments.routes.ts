import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

// SoC: Separation of Concers (Separação de preocupação)
// DTO: Data Transfer Object (transferencia de dado)

appointmentsRouter.get('/', (req, res) => {
  const repositories = appointmentsRepository.all();
  return res.json(repositories);
});

// Como já foi definido a rota, não há necessidade de add toda a rota /appointments/, e sim só o /
appointmentsRouter.post('/', (req, res) => {
  // throw do service.execute
  try {
    const { provider, date } = req.body;

    // zerando os minutos e segundos
    const parsedDate = parseISO(date); // transformação de dado a gente deixa na rota
    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return res.status(200).json(appointment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
