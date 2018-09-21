const express = require('express');
const morgan = require('morgan');
// const layout = require('layout')
const layout = require('./views/layout')



const app = express();
// app.layout();
express.urlencoded({extended: false})
express.static(__dirname+"/public")

app.get('/', function(req, res){
    res.send(layout(''));
    console.log('hi world terminal');
  });
  
  app.listen(3000);