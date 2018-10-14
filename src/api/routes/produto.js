const asyncExec = require("../../helpers/async"), 
    controller = require('../../core/produto/produtoController.js');

module.exports = (app) => {

    app.route('/api/relatorio/produto').get(asyncExec(controller.gerarRelatorio));
}