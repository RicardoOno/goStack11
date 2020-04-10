import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';
// Elementos nao possuem semantica
// Ex: 
//    View: div,footer,main,aside,section
//    Text: p, strong, h1, h2, h3

// Elementos nao possuem estilização propria
// Todos os componentes possuem por padrao "display: flex"

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('project').then(res => {
      console.log(res.data);
      setProjects(res.data);
    })
  }, [])

  async function handleAddProject(){
    const res = await api.post('project', {
      title: `Novo projeto`,
      ownser: 'Levandowysk'
    })
    const project = res.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
      <FlatList
        data={projects}
        keyExtracto={p => p.id}
        renderItem={({ item: project }) => (
          <Text style={styles.projects}> {project.title}</Text>
        )}
      />
      <TouchableOpacity 
        activeOpacity={0.8} 
        style={styles.button} 
        onPress={handleAddProject}
      >
        <Text style={styles.buttonText}>Adicionar projeto</Text>
      </TouchableOpacity>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
  },
  projects: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})