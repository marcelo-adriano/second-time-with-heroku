const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const SERVER_ENV = process.env.SERVER_ENV || 'test';

app.get('/', (_request, response) => {
  if (SERVER_ENV) {
    return response.status(200).send({ message: `Rodando no ambiente ${SERVER_ENV} com CICD/Github actions` });
  }
  return response.status(200).send({ message: 'Dummy endpoint' });
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
