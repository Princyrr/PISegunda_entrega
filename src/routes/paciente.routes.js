const express = require('express');
const PacientesController = require('../controllers/PacientesController');
const router = express.Router();

// Definição das rotas do CRUD de pacientes
router.get('/', PacientesController.listarPacientes);
router.post('/', PacientesController.criarPaciente);
router.get('/:id', PacientesController.buscarPaciente);
router.put('/:id', PacientesController.atualizarPaciente);
router.delete('/:id', PacientesController.deletarPaciente);

module.exports = router;
