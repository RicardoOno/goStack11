const express = require('express');
const { uuid, isUuid } = require('uuidV4');
const cors = require('cors');
const app = express();

app.use(cors()); // utilização para desenvolvimento | + config quando for prd
app.use(express.json());

/*
# Metodos HTTP

- GET: Buscar informações do back-end
- POST: Criar uma informação no back-end
- PUT/PATCH: Alterar uma informação no back-end
- DELETE: Deletar uma informação no back-end

# Tipo de parametros

 - Query Params: Filtros e paginação
    - baseUrl/projects?title=React
 - Route Params: Identificar recursos (Atualizar/Deletar)
    - baseUrl//project/:id 
 - Request Body: Conteudo na hora de criar ou editar um recurso (JSON)

# Middlewares

 - Interceptador de requisições que interrompe totalmente a requisição ou 
    alterar dados da requisição
 */

const projects = [];

function logRequest(req, res, next) {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;


  console.time(logLabel);

  next(); // Próximo middleware

  console.timeEnd(logLabel);

}

function validateProjectID(req, res, next){
  const { id } = req.params;

  if(!isUuid(id)){
    return res.status(400).json({error: 'Invalid project id'});
  }

  return next();
}

app.use(logRequest);
app.use('/project/:id', validateProjectID);

app.get('/project', (req, res) => {
  const {title} = req.query;
  
  const results = title 
  ? projects.filter(p => p.title.includes(title))
  : projects; 
  // console.log(`${title} - ${owner}`);

  return res.json(results);

})

app.post('/project', (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

   return res.json(project);

})

app.put('/project/:id', (req, res) => {
  const {id} = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex(p => p.id === id);

  if(projectIndex < 0){
    return res.status(400).json({ error: 'Project not found' })
  }

  const project = {
    id,
    title,
    owner
  }

  projects[projectIndex] = project;

  return res.json(project);

})

app.delete('/project/:id', (req, res) => {
  const { id } = req.params;
  
  const projectIndex = projects.findIndex(p => p.id === id);

  if(projectIndex < 0){
    return res.status(400).json({ error: 'Project not found' })
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();

})

app.listen(3333, () => {
  console.log('🚀 back-end started!');
});
