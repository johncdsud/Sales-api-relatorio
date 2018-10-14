const controller = require('../../core/condpag/condpagController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}