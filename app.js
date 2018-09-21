const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout')
const models = require('./models');
const userRouter = require('./routes/user');
const wikiRouter = require('./routes/wiki');

// {db} === models

const PORT = 3000;

const app = express();
express.urlencoded({ extended: false })
express.static(__dirname + "/public")

app.get('/', function (req, res) {
  res.send(layout(''));
  // db.authenticate().
  // then(() => {
  //   console.log('connected to the database');
  // })
});

app.use('/wiki', wikiRouter);

const init = async () => {
  await models.db.sync()
  // more to come on server class
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

models.db.sync({force: true});

init();
