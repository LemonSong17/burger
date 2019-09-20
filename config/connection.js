// Node Dependency
let mysql = require('mysql');
let connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 's9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'jr1m6bf5flfsxdte',
    password : 'dt82ixwohi0mca9k', 
    database : 'wo61p7r9u0v32h99' 
  });
}



module.exports = connection;