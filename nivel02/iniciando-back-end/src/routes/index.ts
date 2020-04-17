import { Router } from 'express';
import appointmentRouter from './appointments.routes';

const routes = Router();

// toda rota que começar com /appointments irá para o middleware appointmentRouter
routes.use('/appointments', appointmentRouter);

export default routes;
