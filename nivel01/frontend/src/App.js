import React, { useState, useEffect } from 'react';
import api from './services/api';

// Style
import './App.css';

// Components
import Header from './components/Header';


/**
 * Component
 * Propriedade
 * Estado & Imutabilidade
 */

function App(){
  /**
   * useState retonra um arry com 2 posições
   * 1. Variavel com o seu valor inicial
   * 2. Função para atualizarmos esse valor
  */
  const [projects, setProjects] = useState([]);

  /**
   * useEffect -> disparar funções sempre que tiver alguma info nova
   *   ou quando o componente for exibido em tela
   */
  useEffect(() => {
    api.get('project').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject(){  
    /** mutabilidade. 
    * variavel raiz nao muda o seu valor inicial
    * setProjects nao altera, ele cria uma nova variavel
    */
    //setProjects([...projects, `Novo projecto ${Date.now()}`]); 
    const res = await api.post('project', {
      title: `Novo projecto ${Date.now()}`,
      owner: 'Tadashi'
    });
    
    const project = res.data;
    setProjects([...projects, project]);
    
  }

  return (
  <>
    <Header title="Homepage"/>
    <ul>
      { projects.map(p => <li key={p.id}> {p.title} </li>) }
    </ul>
    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
  </>
  );
}

export default App;