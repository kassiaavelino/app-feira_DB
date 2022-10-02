//Definindo a utilização do Sequelize como  ORM
const Sequelize = require ('sequelize');

//Define em qual modo será utilizado, ambiente ou desenvolvimento
const environment = process.env.NODE_ENV || 'development';
const config = require ('../config/config.js')[environment];

//Passando os dados do banco para o Sequelize
const sequelize = new Sequelize (
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);
module.exports = sequelize;