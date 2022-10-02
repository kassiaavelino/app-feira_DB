//Define a string que conecta com o banco de dados

module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'usuario_feira',
            dialect: 'mysql',
            user: 'root',
            password: 'CityPlace15971'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}