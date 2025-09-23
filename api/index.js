const express = require('express');
const app = express();
app.use(express.json());

// Rota GET
app.get('/hello', (req, res) => {
  res.json({ message: "Olá, API funcionando!" });
});

// Rota POST - soma
app.post('/soma', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: "Os valores devem ser números" });
  }
  res.json({ resultado: a + b });
});

// Rota POST - subtração
app.post('/subtrai', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: "Os valores devem ser números" });
  }
  res.json({ resultado: a - b });
});

// Rota POST - multiplicação
app.post('/multiplica', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: "Os valores devem ser números" });
  }
  res.json({ resultado: a * b });
});

// Rota POST - divisão
app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: "Os valores devem ser números" });
  }
  if (b === 0) {
    return res.status(400).json({ error: "Divisão por zero não permitida" });
  }
  res.json({ resultado: a / b });
});

// Rota GET - status da API
app.get('/status', (req, res) => {
  res.json({ status: "API funcionando normalmente", uptime: process.uptime() });
});

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
