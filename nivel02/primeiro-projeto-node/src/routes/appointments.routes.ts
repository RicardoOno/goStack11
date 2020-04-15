import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointments';

const appointmentsRouter = Router();

const appointments: Appointment[] = [];

// Como já foi definido a rota, não há necessidade de add toda a rota /appointments/, e sim só o /
appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  // zerando os minutos e segundos
  const parseDate = startOfHour(parseISO(date));

  // variicando se não há ja um agendamento na mesma hora
  const findAppointmentInSameDate = appointments.find(a =>
    isEqual(parseDate, a.date),
  );

  if (findAppointmentInSameDate) {
    return res
      .status(400)
      .json({ error: 'This appointment is already booked' });
  }

  const appointment = new Appointment(provider, parseDate);

  appointments.push(appointment);

  return res.status(200).json(appointment);
});

export default appointmentsRouter;
