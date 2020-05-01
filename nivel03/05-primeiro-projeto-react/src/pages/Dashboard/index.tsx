import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  // na tipagem so precisa colocar informações do que ira utilizar
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositorio');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (e) {
      setInputError('Erro na busca por esse repositorio');
    }
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Eplorer" />
      <Title>Explore repositórios no Github</Title>
      {/* !! => nao é fazio */}
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositorio"
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((r) => (
          <a key={r.full_name} href="teste">
            <img src={r.owner.avatar_url} alt={r.owner.login} />
            <div>
              <strong>{r.full_name}</strong>
              <p>{r.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
