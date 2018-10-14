const asyncExec = require("../../helpers/async"), 
    controller = require('../../core/pessoa/pessoaController.js.js');

module.exports = (app) => {

    app.route('/api/relatorio/pessoa/:tipoPessoa').get(asyncExec(controller.gerarRelatorio));
}