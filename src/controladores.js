const dados = require('./dados');

const cadastraAtividade = (req, res) => {
    const corpo = req.body;

    const novaAtividade = corpo;

    dados.push(novaAtividade);

    return res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
};


module.exports = {
    cadastraAtividade
}