const express = require('express')
const Routes = require('./api/routes/routes.js')

const app = express();
app.use(express.json());

Routes(app);

module.exports = app;
