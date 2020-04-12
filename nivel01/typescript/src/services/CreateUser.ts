/**
 * Criar um user: 
 *  - Name,
 *  - email,
 *  - Pass
 */

// Formato de um objeto: Interfaces 
interface TechObject {
  title: string,
  experience: number
}

interface CreateUserData {
  name?: string;
  email: string,
  password: string,
  techs: Array<string|TechObject>,
  passions: string[]
}

export default function createUser({ name, email , password }: CreateUserData){
  const user = {
    name, 
    email, 
    password
  }
  return user;
}