import { isEqual } from 'date-fns';
import Appointment from '../models/Appointments';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    // variicando se não há ja um agendamento na mesma hora
    const findAppointment = this.appointments.find(a => isEqual(date, a.date));

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
