const express = require('express');

const app = express();
const PORT = precess.env.PORT || 3000;

app.use(express.json());

app.get('/', (_request, response) => {
  try {
    response.status(200).json({ message: 'Tudo certo' });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ message: 'Algo deu errado' });
  }
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
