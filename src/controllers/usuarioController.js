//Definindo a utilização do model usuario e a dependência http-status
const Usuario = require('../models/usuario');
const status = require('http-status');

//Cria o método de Insert, que obtem os dados da request
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const senha = req.body.senha;
    const cel = req.body.cel;
    const end = req.body.end;
    const cep = req.body.cep;
    const ativo = req.body.ativo;
    
    //Popula cada campo do model com os campos que são recebidos na request
    Usuario.create({
        nome: nome,
        cpf: cpf,
        senha: senha,
        cel: cel,
        end: end,
        cep: cep,
        ativo: ativo,
    })
        //then = registra o que precisa acontecer quando a Promise for resolvida
        .then(usuario => {
            if (usuario) {
                res.status(status.OK).send(usuario);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que acontecera caso a Promise falhe
        .catch(error => next(error));
};