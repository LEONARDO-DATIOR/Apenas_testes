const mongoose = require('mongoose');

async function conexaoDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_STRING_CONEXAO);
    console.log("MongoDB conectado!");
  } catch (err) {
    console.error("Erro ao conectar no MongoDB:", err);
  }
}

module.exports = conexaoDB;