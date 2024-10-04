const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbNameAndCluster = process.env.DBNAMEANDCLUSTER;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@${dbNameAndCluster}/?retryWrites=true&w=majority`
    );

    console.log("Conectou ao banco!");
    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
