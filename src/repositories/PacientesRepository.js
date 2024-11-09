const mongoose = require('mongoose');
const Paciente = require('../models/Paciente');

class PacientesRepository {
  static async findAll () {
    return Paciente.find();
  }

  static async findById (id) {
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('ID inválido');
    }
    return Paciente.findById(id);
  }

  static async create (data) {
    // Validações de tipos de dados
    if (typeof data.nome !== 'string' || data.nome.trim() === '') {
      throw new Error('Nome inválido');
    }
    if (typeof data.cpf !== 'string' || data.cpf.trim() === '') {
      throw new Error('CPF inválido');
    }
    if (isNaN(Date.parse(data.data_nascimento))) {
      throw new Error('Data de nascimento inválida');
    }
    if (typeof data.telefone !== 'string' || data.telefone.trim() === '') {
      throw new Error('Telefone inválido');
    }

    return Paciente.create(data);
  }

  static async updateById (id, data) {
    // Validações de tipos de dados
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('ID inválido');
    }

    if (data.nome && typeof data.nome !== 'string') {
      throw new Error('Nome inválido');
    }
    if (data.cpf && typeof data.cpf !== 'string') {
      throw new Error('CPF inválido');
    }
    if (data.data_nascimento && isNaN(Date.parse(data.data_nascimento))) {
      throw new Error('Data de nascimento inválida');
    }
    if (data.telefone && typeof data.telefone !== 'string') {
      throw new Error('Telefone inválido');
    }

    return Paciente.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteById (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('ID inválido');
    }
    return Paciente.findByIdAndDelete(id);
  }
}

module.exports = PacientesRepository;
