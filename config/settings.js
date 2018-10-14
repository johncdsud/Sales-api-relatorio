const config = {
    port: process.env.PORT || 3001,
    host: process.env.HOST || 'http://localhost',
    mysql: {
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '##P@$$w0rd##',
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3300,
        database: process.env.MYSQL_DATABASE || 'pedcontrol'
    }
}

module.exports = config;

// const config = {
//     port: process.env.PORT || 3001,
//     host: process.env.HOST || 'http://localhost',
//     mysql: {
//         user: process.env.MYSQL_USER || 'root',
//         password: process.env.MYSQL_PASSWORD || '1234',
//         host: process.env.MYSQL_HOST || '192.168.99.100',
//         port: process.env.MYSQL_PORT || 3306,
//         database: process.env.MYSQL_DATABASE || 'pedcontrol'
//     }
// }

// module.exports = config;