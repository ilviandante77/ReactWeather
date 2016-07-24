var express= require('express');

// creo la mia applicazione
var app=express();

app.use(express.static('app'));

app.listen(3300, function(){
  console.log("Express server is run up port 3300");
});
