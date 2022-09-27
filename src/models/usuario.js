//Define a utilização do sequelize
const Sequelize = require('sequelize');

//Obtem dados de conexão do sequelize como banco MySQL
const sequelize= require('../database/database.js');

//Criando a tabela no BD 
const Usuario = sequelize.define("usuario",{
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome:{
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3,100]
        }
    },
    cpf:{
        allowNull: false
    }
})