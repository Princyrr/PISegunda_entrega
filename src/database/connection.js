const mongoose = require('mongoose');

// Obter a URL de conexão do MongoDB a partir das variáveis de ambiente
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/saude';

/**
 * Função para conectar ao MongoDB
 * @returns {Promise<void>} A promessa que resolve quando a conexão é estabelecida.
 */
async function connectToDatabase () {
  try {
    // Conectar ao MongoDB com as opções recomendadas
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout de 5 segundos para tentativas de conexão
      socketTimeoutMS: 45000, // Timeout para operações de leitura/gravação
    });

    console.log('Conectado ao MongoDB com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err.message);
    process.exit(1); // Encerrar o processo com erro caso a conexão falhe
  }
}

module.exports = connectToDatabase;
