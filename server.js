var express= require('express');

// creo la mia applicazione
var app=express();
const PORT = process.env.PORT || 3300;
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  } else{
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('app'));


app.listen(PORT, function(){
  console.log("Express server is run up port" + PORT);
});
