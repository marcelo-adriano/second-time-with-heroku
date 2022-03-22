const express = require('express');

const app = express();
const PORT = process.env.PORT || null;

app.get('/', (_request, response) => {
  return response.status(501).end();
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
