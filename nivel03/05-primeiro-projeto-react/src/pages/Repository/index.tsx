import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/github-logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explore" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="" alt="aaa" />
          <div>
            <strong>AAA</strong>
            <p>bbbb</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>a</strong>
            <span>b</span>
          </li>
          <li>
            <strong>a</strong>
            <span>b</span>
          </li>
          <li>
            <strong>a</strong>
            <span>b</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="weqwe">
          <div>
            <strong>asdasd</strong>
            <p>asdadasdqwe</p>
          </div>
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
