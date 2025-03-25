const cors = require('cors');
const express = require('express');

const atedimentoRoutes = require('./routes/atendimentoRoutes');
const depoimentoRoutes = require('./routes/depoimentoRoutes');
const enderecoRoutes = require('./routes/enderecoRoutes');
const evolucaoClinicaRoutes = require('./routes/evolucaoClinicaRoutes');
const grupoApoioRoutes = require('./routes/grupoApoioRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');
const telefoneRoutes = require('./routes/telefoneRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());

app.use(express.json());
app.use('/atendimentos', atedimentoRoutes);
app.use('/depoimentos', depoimentoRoutes);
app.use('/enderecos', enderecoRoutes);
app.use('/evolucao-clinica', evolucaoClinicaRoutes);
app.use('/grupo-de-apoio', grupoApoioRoutes);
app.use('/pacientes', pacienteRoutes);
app.use('/profissionais', profissionalRoutes);
app.use('/telefones', telefoneRoutes);
app.use('/users', userRoutes);

module.exports = app;