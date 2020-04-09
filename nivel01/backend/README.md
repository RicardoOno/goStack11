# Arquitetura do NODE

- EVENT LOOP
  - Baseado em eventos
  - Call stack (pilha de eventos | ultimo que entra, primeiro que sai)
- Single-thread
  - C++ por trás com libuv (lib que permite usar multithreads)
  - Background threads
- Non blocking I/O
  - Input/Output não blocante

# Frameworks

- ExpressJS:
  - Não tem opnião (podemos montar da forma que quisermos)
  - Facil utilização 
  - Micro-serviços
- Frameworks opinados:
  - AdonisJS
  - NestJS

# Vantagem de API-REST

- Multiplos clients em um unico back-end
- Comunicação padronizada
  - JSON (javascript object notation)

# Conteudo da requisição

- Routes (http://www.google.com)
- Route params (http://www.google.com/1/)
- Query params (http://www.google.com/1/id=123543oik)