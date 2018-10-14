const controller = require('../../core/produtos/produtosController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}