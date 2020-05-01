import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Eplorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/17484972?s=460&u=5013a4e13ca7c3b7f5654ad6e03480df856a34ee&v=4"
            alt="Ricardo Ono"
          />
          <div>
            <strong>DB Connection</strong>
            <p>API</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/17484972?s=460&u=5013a4e13ca7c3b7f5654ad6e03480df856a34ee&v=4"
            alt="Ricardo Ono"
          />
          <div>
            <strong>DB Connection</strong>
            <p>API</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/17484972?s=460&u=5013a4e13ca7c3b7f5654ad6e03480df856a34ee&v=4"
            alt="Ricardo Ono"
          />
          <div>
            <strong>DB Connection</strong>
            <p>API</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
