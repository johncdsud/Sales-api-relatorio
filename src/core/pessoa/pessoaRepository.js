const db = require("../../../config/dbConnection"),
    tabela = 'PESSOA';

module.exports = {
    buscarPessoas
}

async function buscarPessoas(tipoPessoa) {
    let query = `SELECT * FROM ${tabela} WHERE pessoa_tipo = '${tipoPessoa}'`
    let pessoas = await db.querySync(query);
    return pessoas;
}