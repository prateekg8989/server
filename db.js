const mysql = require('mysql');
function connect() {
    const connection=mysql.createConnection({
        host:'172.0.2.82',
        port:8806,
        database:'classwork',
        user:'root',
        password:'manager'
    });
    connection.connect();
    return connection;
}
module.exports = {connect : connect};