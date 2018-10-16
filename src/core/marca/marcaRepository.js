const db = require("../../../config/dbConnection"),
    tabela = 'MARCA';

module.exports = {
    buscarMarca
}

async function buscarMarca() {
    let query = `SELECT * FROM ${tabela}`
    return db.querySync(query);
}