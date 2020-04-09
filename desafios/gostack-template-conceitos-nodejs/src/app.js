const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  /**
   * Show all repos
   */
  return response.status(200).json(repositories);
});

app.post("/repositories", (request, response) => {
  /**
   * Insert example:
   * 
   * { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 };
   * 
   * --------
   * Start likes in 0
   * ID is an UUID
   */
  const { title, url, techs } = request.body;
  const labelRepository = { id: uuid(), title,  url, techs, likes: 0 };
 
  repositories.push(labelRepository);

  return response.status(200).json(labelRepository);
});

app.put("/repositories/:id", (request, response) => {
  /**
   * Update title, url and techs in selected ID
   */
  const { id } = request.params;
  const { title, url, techs } = request.body;

  if(!(isUuid(id))){
    return response.status(400).json({ error: 'Invalid ID' });
  }

  const repoIndex = repositories.findIndex(r => r.id === id);
 
  if(repoIndex < 0){
    return response.status(404).json({ error: 'Repository not found' });
  }

  const labelRep = { id, title, url, techs, likes: 0 };

  repositories[repoIndex] = {
    labelRep
  };

  return response.status(200).json(labelRep);

});

app.delete("/repositories/:id", (request, response) => {
  /**
   * Delete an repo in selected ID
   */
  const { id } = request.params;
  
  if(!isUuid(id)){
    return response.status(400).json({ error: 'Invalid ID' });
  }

  const repository = repositories.find(r => r.id === id); 
  if(!repository){
    return response.status(400).json({ error: 'Repository not found' });
  }

  repositories.splice(id, 1);

  return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
  /**
   * Update likes (+1) to selected repo (id) | another entity
   */

  const{ id } = request.params;
  
  if(!isUuid(id)){
    return response.status(400).json({ error: 'Invalid ID' });
  }

  const repoIndex = repositories.findIndex(r => r.id === id);
 
  if(repoIndex < 0){
    return response.status(404).json({ error: 'Repository not found' });
  }

  repositories[repoIndex].likes += 1;
  
  return response.status(200).json(repositories[repoIndex]);
});

module.exports = app;
