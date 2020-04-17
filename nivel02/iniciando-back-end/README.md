# Banco de dados

- Utilização sql nativo: node-postgress
- Utilização na query builder: knex.js
- Utilização de objetos: orms

# Docker

- Criação de ambientes isolados (containers)
- Os containers expoes portas para comunicação (as portas definem as formas de conectar)

## Conceitos

- Imagem: serviço disponivel no Docker (postgres, myqsl)
- Container: instancia de uma imagem (n containers para 1 imagem)
- Docker Registry (Docker Hub)
- Docker File: receita para montar nossa propria imagem
  - Define como a nossa aplicação funcionará em um ambiente totalmente do zero

# Criando container

comando: `docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
`--name gostack_postgres` -> nome do container
`-e POSTGRES_PASSWORD=docker` -> senha definida como docker
`-p 5432:5432` -> [porta do sistema]:[porta do container]
`-d postgres` -> imagem postgres foi utilizada

# DBeaver

Conectar a diversos bds

# pg

Driver do postgres

