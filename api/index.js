const express = require('express');
const app = express();
app.use(express.json());

// Rota GET
app.get('/hello', (req, res) => {
  res.json({ message: "Olá, API funcionando!" });
});

// Rota POST
app.post('/soma', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: a + b });
});

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
