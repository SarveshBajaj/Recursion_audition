var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password : 'p@ssw0rds',
  database: 'recursion',
  port: '3306'
});

app.get('/', function(req,resp){

});

app.get('/submit-url/:url',function(req, res){
  //get name from the request object
  var url = req.params.url;
  console.log(url);
  connection.connect(function(error){
    if(!!error){
      console.log('errorhello');
      //connection.release();
    } else{
      console.log('connected');
      connection.query('INSERT INTO `recursion`.`generated` (`url`) VALUES ("'+url+'");',function(errors, rows, fields){
        if(!!error){
          console.log("error1 in query");
        } else {
          console.log('successful insertion');
          hi(error);
        }
    });

    }
  });
  //res.send(JSON.stringify(url));
});

function hi(error){
connection.query("SELECT * FROM recursion.generated",function(errors, rows, fields){
  if(!!error){
    console.log("error in query");
  } else {
    console.log('successful query');
    console.log(rows);
  }
});
};

app.listen(1369);
