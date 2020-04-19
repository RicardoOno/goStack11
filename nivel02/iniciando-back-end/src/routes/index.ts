import { Router } from 'express';

import appointmentRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

// toda rota que começar com /appointments irá para o middleware appointmentRouter
routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRouter);

export default routes;
