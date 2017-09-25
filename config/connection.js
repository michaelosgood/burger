
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Boomers11!',
    database : 'burgers_db'
  });
   
  connection.connect(function(err){
      if(err)throw err;
      console.log("Connected as ID: " + connection.threadId);
  });

module.exports = connection;