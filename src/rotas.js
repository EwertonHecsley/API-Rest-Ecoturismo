const express = require('express');

const { veririficacaoNomeEtamanho, veririficaPrice, verificaDescricao, verificaDataformato, verificaRating, verificaDificuldade } = require('./intermediarios');

const { cadastraAtividade } = require('./controladores');

const arrMiddlesware = [veririficacaoNomeEtamanho, veririficaPrice, verificaDescricao, verificaDataformato, verificaRating, verificaDificuldade];

const rota = express.Router();


rota.post('/activities', arrMiddlesware, cadastraAtividade);


module.exports = rota;