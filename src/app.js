require('dotenv').config()

const express = require('express')
const Routes = require('./api/routes/routes.js');
const conexaoDB = require('./config/database.js');

const app = express();
app.use(express.json());

conexaoDB();

Routes(app);

module.exports = app;
