const PacientesRepository = require('../repositories/PacientesRepository');

class PacientesController {
  static async listarPacientes (req, res) {
    try {
      const pacientes = await PacientesRepository.findAll();
      res.status(200).json(pacientes);
    } catch (error) {
      console.error('Erro ao listar pacientes:', error.message);
      res.status(500).json({ error: 'Erro ao listar pacientes' });
    }
  }

  static async buscarPaciente (req, res) {
    const { id } = req.params;

    try {
      const paciente = await PacientesRepository.findById(id);
      res.status(200).json(paciente);
    } catch (error) {
      console.error('Erro ao buscar paciente:', error.message);
      res.status(404).json({ error: error.message });
    }
  }

  static async criarPaciente (req, res) {
    const { nome, cpf, data_nascimento, telefone } = req.body;

    // Verificar se os campos obrigatórios estão preenchidos
    if (!nome || !cpf || !data_nascimento || !telefone) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
      const paciente = await PacientesRepository.create({ nome, cpf, data_nascimento, telefone });
      res.status(201).json(paciente);
    } catch (error) {
      console.error('Erro ao criar paciente:', error.message);
      res.status(400).json({ error: error.message });
    }
  }

  static async atualizarPaciente (req, res) {
    const { id } = req.params;
    const { nome, cpf, data_nascimento, telefone } = req.body;

    // Verificar se os campos obrigatórios estão preenchidos
    if (!nome || !cpf || !data_nascimento || !telefone) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
      const paciente = await PacientesRepository.updateById(id, { nome, cpf, data_nascimento, telefone });
      if (!paciente) {
        return res.status(404).json({ error: 'Paciente não encontrado' });
      }
      res.status(200).json(paciente);
    } catch (error) {
      console.error('Erro ao atualizar paciente:', error.message);
      res.status(400).json({ error: error.message });
    }
  }

  static async deletarPaciente (req, res) {
    const { id } = req.params;

    try {
      const paciente = await PacientesRepository.deleteById(id);
      if (!paciente) {
        return res.status(404).json({ error: 'Paciente não encontrado' });
      }
      res.status(200).json({ message: 'Paciente deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar paciente:', error.message);
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = PacientesController;
