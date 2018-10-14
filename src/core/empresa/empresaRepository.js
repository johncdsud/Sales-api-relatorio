const db = require("../../../config/dbConnection"),
    tabela = 'EMPRESA';

module.exports = {
    buscarEmpresa
}

async function buscarEmpresa(codigo) {
    let query = `SELECT * FROM ${tabela} WHERE emp_codigo = ${codigo}`
    let empresa = await db.querySync(query);
    return empresa[0];
}