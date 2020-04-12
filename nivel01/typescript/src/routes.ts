import { Request, Response } from 'express';

import createUser from './services/CreateUser';


export function helloWorld(req:Request, res: Response) {

  const user = createUser({
    email: 'rr@gmail.com',
    password: 'qwe123',
    techs: ['VueJS', 'React Native', 'React JS',
      { title: 'Javascript', experience: 60 }
    ],
    passions: ['Farming', 'Sports']
  });

  return res.json({ msg: 'Hello' });
}