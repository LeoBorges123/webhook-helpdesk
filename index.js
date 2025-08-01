const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let mensagens = [];

app.post("/webhook", (req, res) => {
  const novaMensagem = req.body;
  mensagens.unshift(novaMensagem);
  if (mensagens.length > 200) mensagens = mensagens.slice(0, 200);
  console.log("📩 Mensagem recebida:", novaMensagem);
  res.sendStatus(200);
});

app.get("/mensagens", (req, res) => {
  res.json(mensagens);
});

app.listen(port, () => {
  console.log(`🚀 Webhook rodando na porta ${port}`);
});
