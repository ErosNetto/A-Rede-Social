const mongoose = require("mongoose");
const pingDatabase = require("./pingDatabase");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbNameAndCluster = process.env.DBNAMEANDCLUSTER;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@${dbNameAndCluster}/?retryWrites=true&w=majority`
    );

    console.log("Conectou ao banco!");

    // Agendar o ping a cada 5 minutos
    setInterval(pingDatabase, 300000);

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
