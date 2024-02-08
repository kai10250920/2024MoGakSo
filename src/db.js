module.exports= {
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'mogakso'
};

/*
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'mogakso'
});

connection.connect();

connection.query('SELECT * from contact', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();
*/