const db = require("../../../config/dbConnection"),
    tabela = 'CONDPAG';

module.exports = {
    buscarCondpag
}

async function buscarCondpag() {
    let query = `SELECT * FROM ${tabela}`;
    return db.querySync(query);
}