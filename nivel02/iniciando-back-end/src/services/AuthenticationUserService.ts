import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/Users';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
}

class AuthenticationUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password');
    }

    const checkPass = await compare(password, user.password);

    if (!checkPass) {
      throw new Error('Incorrect email/password');
    }

    return {
      user,
    };
  }
}

export default AuthenticationUserService;
