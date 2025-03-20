const express = require('express');
const depoimentoRoutes = require('./routes/depoimentoRoutes');
const grupoApoioRoutes = require('./routes/grupoApoioRoutes');

const app = express();

app.use(express.json());
app.use('/depoimentos', depoimentoRoutes);
app.use('/grupo-de-apoio', grupoApoioRoutes);

module.exports = app;