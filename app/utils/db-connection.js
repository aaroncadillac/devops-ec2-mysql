const mysql = require('mysql');
const {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = proccess.env

const getConnection = () => {
  const connection = mysql.createConnection({
    host     : DB_HOST,
    user     : DB_USER,
    password : DB_PASSWORD,
    database : DB_NAME
  });
   
  connection.connect();
  
  return connection;
}

const DBFunction = (fn) => {
  return function() {
    const connection = getConnection();
    return fn.call(null, ...arguments, connection, function() {
      connection.end();
    });
  }
}

module.exports = {
  DBFunction
}