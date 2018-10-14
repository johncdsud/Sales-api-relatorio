const controller = require('../../core/usuario/usuarioController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}