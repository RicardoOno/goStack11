import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import appointmentsRouter from '../routes/appointments.routes';

/**
 * 1. [X] Recebimento das informações
 * 2. [/] Tratativa de erros/excessoes
 * 3. [X] Acesso ao repositorio
 */

interface RequestDTO {
  date: Date;
  provider: string;
}

/**
 * SOLID
 * Principio: Dependency Inversion (Ex: appointmentsRepository)
 *
 */

// Service so tera UMA UNICA FUNÇÃO
class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: RequestDTO): Appointment {
    const appointmentDate = startOfHour(date); // regra de negocio

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      // O service nunca tem acesso a req/res do express. Assim, ele sempre retornar erro
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
