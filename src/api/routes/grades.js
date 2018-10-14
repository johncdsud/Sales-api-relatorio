const controller = require('../../core/grades/gradesController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}