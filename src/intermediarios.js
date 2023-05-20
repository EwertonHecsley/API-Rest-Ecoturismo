const moment = require('moment');

const veririficacaoNomeEtamanho = (req, res, next) => {
    const corpo = req.body;

    const keys = Object.keys(corpo);

    const verifica = keys.includes("name");

    if (!verifica) {
        return res.status(400).json({ "message": "O campo nome é obrigatório" });
    };

    if (corpo.name.length < 4) {
        return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
    };

    next()
};

const veririficaPrice = (req, res, next) => {
    const corpo = req.body;
    const { price } = corpo;
    const keyPrice = Object.keys(corpo);

    const verifica = keyPrice.includes("price");

    if (!verifica) {
        return res.status(400).json({ "message": "O campo price é obrigatório" });
    };

    if (price < 0) {
        return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
    };

    next();
};

const verificaDescricao = (req, res, next) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ "message": "O campo description é obrigatório" })
    };

    if (!description.createdAt) {
        return res.status(400).json(
            { message: 'O campo createdAt é obrigatório' },
        );
    }

    if (!description.rating) {
        return res.status(400).json(
            { message: 'O campo rating é obrigatório' },
        );
    }

    if (!description.difficulty) {
        return res.status(400).json(
            { message: 'O campo difficulty é obrigatório' },
        );
    }


    next();
};

const verificaDataformato = (req, res, next) => {
    const { createdAt } = req.body.description;

    const data = createdAt;
    const formato = "DD/MM/YYYY";

    if (moment(data, formato, true).isValid()) {
        next();
    } else {
        return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
    };
};

const verificaRating = (req, res, next) => {
    const { rating } = req.body.description;

    if (Number.isInteger(rating) && rating > 0 && rating <= 5) {
        next();
    } else {
        return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
    };
};

const verificaDificuldade = (req, res, next) => {
    const { difficulty } = req.body.description;

    const keys = ["Fácil", "Médio", "Difícil"];

    const verifica = keys.includes(difficulty);

    if (!verifica) {
        return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
    };

    next()
};

module.exports = {
    veririficacaoNomeEtamanho,
    veririficaPrice,
    verificaDescricao,
    verificaDataformato,
    verificaRating,
    verificaDificuldade
};