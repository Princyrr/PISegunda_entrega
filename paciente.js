const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  data_nascimento: { type: Date, required: true },
  telefone: { type: String, required: true },
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;

