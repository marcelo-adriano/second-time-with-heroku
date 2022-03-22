const express = require('express');

const app = express();
const PORT = precess.env.PORT || 3000;

app.use(express.json());

app.get('/', (_request, response) => {
  response.send('Vamo que vamo Trybe!');
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
