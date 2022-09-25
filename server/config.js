const fs = require('fs');
const mysql = require('mysql');

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);


const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database,
    multipleStatements: true // 다중쿼리문 허용
});

connection.connect();

module.exports = connection