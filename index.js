const express = require('express');

const app = express();
const PORT = process.env.PORT || null;
const SERVER_ENV = process.env.SERVER_ENV || null;

app.get('/', (_request, response) => {
  if (SERVER_ENV) {
    return response.status(200).send({ message: `Rodando no ambiente ${SERVER_ENV}` });
  }
  return response.status(200).send({ message: 'Dummy endpoint' });
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
