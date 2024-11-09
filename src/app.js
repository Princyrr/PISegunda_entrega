const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectToDatabase = require('./database/connection');
const routes = require('./routes');

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Definir o PORT a partir de uma variável de ambiente ou usar 3000 como padrão
const PORT = process.env.PORT || 3000;

// Middleware para parser JSON
app.use(express.json());

// Rotas da API
app.use('/api', routes);

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal para servir o index.html
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

// Conectar ao banco de dados e iniciar o servidor
const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); // Encerra o processo caso a conexão com o banco falhe
  }
};

// Iniciar o servidor
startServer();
