const {Sequelize} = require ("sequelize")

const dbHostName = process.env.DB_HOST_NAME;
const dbHostDialect = process.env.DB_HOST_DIALECT;
const dbName = process.env.DB_NAME;
const dbMuniPass = process.env.DB_MUNI_PASS;

const database = new Sequelize(dbName, 'root', dbMuniPass, {
    host: dbHostName,
    dialect: dbHostDialect,
  });


  module.exports = database;