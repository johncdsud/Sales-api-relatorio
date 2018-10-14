const config = require("./settings"),
    mysql = require("mysql");

var client = mysql.createConnection(config.mysql);
client.connect();

client.querySync = async (query) => {
    return new Promise((resolve, reject) => {
        client.query(query, (err, data) => {
            if(err)
                return reject(err);

            resolve(data);
        });
    });
}

module.exports = client;