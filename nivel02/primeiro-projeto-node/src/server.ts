import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello' });
});

app.listen(3333, () => {
  console.log('SERVER STARTED at port 3333');
})