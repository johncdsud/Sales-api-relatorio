const controller = require('../../core/fornecedores/fornecedoresController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}