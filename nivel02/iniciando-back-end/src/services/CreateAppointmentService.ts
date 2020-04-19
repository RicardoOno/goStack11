import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

import AppError from '../errors/AppError';

interface RequestDTO {
  date: Date;
  provider_id: string;
}
// Service so tera UMA UNICA FUNÇÃO
class CreateAppointmentService {
  public async execute({
    date,
    provider_id,
  }: RequestDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointmentDate = startOfHour(date); // regra de negocio

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      // O service nunca tem acesso a req/res do express. Assim, ele sempre retornar erro
      throw new AppError('This appointment is already booked');
    }

    // Cria uma instancia mas não salva
    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
