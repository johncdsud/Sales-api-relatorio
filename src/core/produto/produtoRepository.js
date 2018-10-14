const db = require("../../../config/dbConnection"),
    tabela = 'PRODUTO';

module.exports = {
    buscarProdutos
}

async function buscarProdutos(codigo) {
    let query = `SELECT * FROM ${tabela} p INNER JOIN MARCA m ON m.marca_codigo = p.marca_codigo`
    return await db.querySync(query);
}