const { host, port } = require("../../config/settings"),
    fs = require("fs"),
    jsreport = require('jsreport');

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(params, templateName, orientation) {
    return new Promise((resolve, reject) => {
        let template = fs.readFileSync(`./src/resources/relatorios/${templateName}`, 'utf-8');

        jsreport.render({
            template: {
                content: template,
                recipe: 'phantom-pdf',
                engine: 'handlebars',
                phantom: { orientation: orientation || 'portrait' }
            },
            data: params
        }).then((out) => {
            uploadLocalFile(out.content);
            resolve(getUrl());
        }).catch((e) => {
            return reject(e);
        });
    });
}

function getUrl() {
    return `${host}:${port}/relatorios/relatorio.pdf`;
}

function uploadLocalFile(file) {
    fs.writeFileSync(`./src/resources/uploads/relatorio.pdf`, file);
}