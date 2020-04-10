import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(res => {
      console.log(res.data);
      setRepositories(res.data);
    });
  }, [])

  async function handleAddRepository() {
    // TODO
    const res = await api.post('repositories', {
      title: `New repo: ${Date.now()}`,
      url: 'https://git.wew',
      techs: ['Rico', 'Express', 'Json']
    });
    setRepositories([...repositories, res.data]);
  }

  async function handleRemoveRepository(id) {
    // TODO
    const res = await api.delete(`repositories/${id}`);
    setRepositories(repositories.filter(item => item.id !== id));    

  }

  return (
    <div>
      <ul data-testid="repository-list">
        { repositories.map(r => 
          <li key={r.id}>
            { r.title }
            <button onClick={() => handleRemoveRepository(r.id)}>
              Remover
            </button>
          </li>
        )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
