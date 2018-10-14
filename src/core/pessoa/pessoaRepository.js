const db = require("../../../config/dbConnection"),
    tabela = 'PESSOA';

module.exports = {
    buscarPessoa
}

async function buscarPessoa(codigo) {
    let query = `SELECT * FROM ${tabela} WHERE pessoa_codigo = ${codigo}`
    let pessoa = await db.querySync(query);
    return pessoa[0];
}