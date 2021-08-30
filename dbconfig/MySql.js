const mysql = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'productos',
        port: '8889'
    },
    pool: { min: 0, max: 10 }
}

module.exports = mysql;