const express = require('express');
const router = express.Router();

const pacienteRoutes = require('./paciente.routes');

router.use('/pacientes', pacienteRoutes);

module.exports = router;
