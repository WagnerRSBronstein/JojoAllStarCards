var batalhaModel = require("../models/batalhaModel");

function checarID(req, res){
    var idUsuario = req.body.idUsuarioServer;

    if(idUsuario == undefined){
        res.status(400).send("id usuario undefined")
    }else {

        batalhaModel.checarID(idUsuario)
        .then(
                function(resultado) {
                    if(resultado.length >= 1 && resultado.length <= 10) {
                        var lista= [];
                        for(var i = 0; i < resultado.length; i++){
                            lista.push(resultado[i].dano_causado);
                        } 
                        
                        res.json({
                            dano_causado: lista
                        });
                        console.log(resultado);
                        res.status(200).send(resultado[0]);
                    }else {
                        res.status(403).send("Dano Inválido!")
                    }
                }
            ).catch(
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}

function registrarBatalha(req, res){
    var idUsuario = req.body.idUsuarioServer;
    var dano = req.body.danoServer;
    var batalhaAtual = req.body.batalhaAtualServer; 

    if(idUsuario == undefined){
        res.status(400).send("undefined")
    }else if(dano == undefined){
        res.status(400).send("undefined")
    }else if(batalhaAtual == undefined){
        res.status(400).send("undefined")
    }else {
        batalhaModel.registrarBatalha(idUsuario, dano, batalhaAtual)
            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    res.status(500).send(erro.sqlMessage);
                }
            )
    }
}


module.exports = {
    checarID,
    registrarBatalha
}