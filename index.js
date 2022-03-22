const express = require('express');

const app = express();
const PORT = process.env.PORT || null;

app.get('/', (_request, response) => {
  return response.status(200).send({ message: 'Dummy endpoint' });
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
