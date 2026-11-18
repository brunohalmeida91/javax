# Javax - Sistema de Gerenciamento de Contatos

Aplicação web Full-Stack desenvolvida para gerenciamento de contatos, composta por uma API RESTful em Node.js integrada ao banco de dados PostgreSQL e uma interface moderna construída em React com Vite.

## 🚀 Tecnologias Utilizadas

### Backend

- **Node.js** & **Express** (Servidor e rotas da API)
- **PostgreSQL** (`pg` Pool para conexão com o banco de dados)
- **CORS** (Integração segura entre frontend e backend)

### Frontend

- **React** (`App.jsx`, `main.jsx`)
- **Vite** (Ambiente de desenvolvimento e build)
- **CSS3** (`app.css`)

---

## 📂 Estrutura do Projeto

```text
javax/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   └── server.js          # Servidor Express e conexão com PostgreSQL
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── app.css
│   │   ├── App.jsx        # Componente principal da interface
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 📋 Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org) (versão 18 ou superior)
- [PostgreSQL](https://postgresql.org)

---

## 🔧 Como Instalar e Rodar o Projeto

Como o projeto é dividido em duas partes, você precisará abrir **dois terminais** (um para o backend e outro para o frontend).

### 1. Configurar o Banco de Dados (PostgreSQL)

Crie um banco de dados no PostgreSQL e execute o comando SQL abaixo para criar a tabela `contatos`:

```sql
CREATE TABLE contatos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(20)
);
```

_(Ajuste as colunas acima caso sua tabela possua campos diferentes)._

### 2. Iniciar o Backend

No primeiro terminal, entre na pasta `backend`, instale as dependências e inicie o servidor:

```bash
cd backend
npm install
node --watch server.js
```

_(Certifique-se de que as credenciais do banco no arquivo `server.js` correspondem às do seu PostgreSQL)._

### 3. Iniciar o Frontend

No segundo terminal, entre na pasta `frontend`, instale as dependências e inicie o Vite:

```bash
cd frontend
npm install
npm run dev
```

Acesse o link exibido no terminal (geralmente `http://localhost:5173`) para visualizar a aplicação.

---

## 📌 Endpoints da API

- `GET /contatos` - Retorna a lista de todos os contatos cadastrados.
- `POST /contatos` - Adiciona um novo contato ao banco de dados.
- `PUT /contatos/:id` - Atualiza os dados de um contato existente.
- `DELETE /contatos/:id` - Exclui um contato pelo ID.

---

## 👨‍💻 Autor

Desenvolvido por **Bruno Almeida** ([brunohalmeida91](hhttps://github.com/brunohalmeida91/javax)).
