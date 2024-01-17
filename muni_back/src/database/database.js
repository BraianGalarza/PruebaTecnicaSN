const {Sequelize} = require ("sequelize")


const database = new Sequelize('muni_db', 'root', 'Cachetes1!', {
    host: 'localhost',
    dialect: 'mysql',
  });


  module.exports = database;