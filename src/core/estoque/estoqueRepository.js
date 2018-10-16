const db = require("../../../config/dbConnection"),
    tabela1 = 'ITEMESTOQUE',
    tabela2 = 'MOVESTOQUE';

module.exports = {
    buscarEstoque
}

async function buscarEstoque() {
    let estoqueEntrada = await buscarEstoqueEntrada();
    let estoqueSaida = await buscarEstoqueSaida();

    return {
        entrada: estoqueEntrada,
        saida: estoqueSaida
    };
}

async function buscarEstoqueEntrada() {
    let query = `SELECT * FROM ${tabela1} i INNER JOIN ${tabela2} mov ON i.movest_codigo = mov.movest_codigo WHERE movest_motivo is NULL`;
    return db.querySync(query);
}

async function buscarEstoqueSaida() {
    let query = `SELECT * FROM ${tabela1} i INNER JOIN ${tabela2} mov ON i.movest_codigo = mov.movest_codigo WHERE movest_motivo is NOT NULL`;
    return db.querySync(query);
}