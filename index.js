const express = require('express');
const mongoose = require('mongoose');
const Paciente = require('./models/Paciente'); // Certifique-se de que o modelo Paciente está importado corretamente

const app = express();
const PORT = 3000;

// Middleware para parser JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/saude', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.log('Erro ao conectar ao MongoDB:', err));

// Rota PUT para atualizar um paciente
app.put('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, data_nascimento, telefone } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    // Verificar se o ID é válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    try {
        const paciente = await Paciente.findByIdAndUpdate(id, { nome, cpf, data_nascimento, telefone }, { new: true });

        if (!paciente) {
            return res.status(404).json({ error: 'Paciente não encontrado' });
        }

        res.status(200).json(paciente);
    } catch (error) {
        console.error('Erro ao atualizar paciente:', error.message);
        res.status(500).json({ error: 'Erro ao atualizar paciente' });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
