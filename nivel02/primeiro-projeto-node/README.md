# @types/...

modulos que já possuim o typescript dos modulos

# ts-node-dev (-d)

Faz papel do nodemon e to `yarn tsc` e acaba não poluindo a arvore de codigo

`--transpileOnly` desabilita a checagem se o codigo está correto.
`--ignore-watch node_modules` desabilita o ts-node-dev a verificar codigo do node_modules

# .editorconfig

Configuração para padronizar editores

# eslint (-d)

Padronizar codigos

## yarn add -D eslint-import-resolver-typescript

Habilidade do eslint entender o import de um ts

# Prettier

Deixar o codigo mais bonito. Integração com o ESLint

`yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

# Debug in VSCode

`attach`: debugar em modo depuração
`--inspect`: um listener do debug

# Typescript

`Omit<[interface], 'variavel'>` -> omitir uma variavel. Ex, id com uuid();

# Rota

Recebe requisição -> repassa para outro arquivo -> retornar a resposta

## Service

- Tem uma unica responsabilidade (fazer a regra de negocio);
- Transformação de dados não entra nos services

## Dependency Inversion

- Passando dados via constructor
