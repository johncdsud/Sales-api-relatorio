const controller = require('../../core/estoque/estoqueController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}