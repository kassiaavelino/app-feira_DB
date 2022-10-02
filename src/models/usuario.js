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
            len: [10,100]
        }
    },
    cpf:{
        allowNull: false,
        type: Sequelize.INTEGER(15)
    },
    senha:{
        allowNull: false,
        type : Sequelize.STRING(20),
        validate: {
            len: [6,20]
        }
    },
    cel:{
        allowNull: false,
        type: Sequelize.INTEGER(20),
        validate:{
            len: [11,20]
        }
    },
    end:{
        allowNull: false,
        type: Sequelize.STRING(150),
        validate:{
            len:[20,150]
        }
    },
    cep:{
        allowNull: false,
        type: Sequelize.INTEGER(10)
    },
    ativo:{
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    }
});

module.exports = Usuario;