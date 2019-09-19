// Node Dependency
let mysql = require('mysql');
let connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'fumanchu7', 
    database : 'burgers_db' 
  });
}



module.exports = connection;