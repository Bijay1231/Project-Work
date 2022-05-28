const { createPool } = require('mysql');
const mysql = createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'campus_mart',
    multipleStatements: true
})

module.exports = mysql;