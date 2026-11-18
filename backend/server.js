const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Configuração de conexão com o mesmo banco do pgAdmin 4
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "livraria",
  password: "5432",
  port: 5432,
});

// Rota que recebe os dados do React e salva no PostgreSQL
app.post("/api/contatos", async (req, res) => {
  const { nome, email, telefone } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO contatos (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *",
      [nome, email, telefone],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao salvar no banco de dados" });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
