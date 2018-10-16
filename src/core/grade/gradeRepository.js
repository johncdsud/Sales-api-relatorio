const db = require("../../../config/dbConnection"),
    tabela = 'GRADE';
    tabela2 = 'ITEMGRADE';

module.exports = {
    buscarGrade
}

async function buscarGrade() {
    let query = `SELECT * FROM ${tabela}`
    return db.querySync(query);
}