const express = require('express');
const depoimentoRoutes = require('./routes/depoimentoRoutes');

const app = express();

app.use(express.json());
app.use('/depoimentos', depoimentoRoutes);

module.exports = app;