const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '5.252.55.160',
    user: 'thelottery',
    password: 'thelottery',
    database: 'thelottery',
});
export default connection;