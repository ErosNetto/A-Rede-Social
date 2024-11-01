const mongoose = require("mongoose");

async function pingDatabase() {
  try {
    await mongoose.connection.db.admin().ping();
    console.log("Ping no MongoDB Atlas realizado com sucesso");
  } catch (error) {
    console.error("Erro ao tentar pingar o MongoDB Atlas:", error);
  }
}

module.exports = pingDatabase;
