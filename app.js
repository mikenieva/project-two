require('dotenv').config();

const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const hbs          = require('hbs');

mongoose.Promise = Promise;
mongoose
  .connect(process.env.DB || 'mongodb://localhost:27017/project-two', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const app = express();


if(app.get('env') !== 'development'){
  app.use(function(req, res, next) {
    if ((req.get('X-Forwarded-Proto') !== 'https')) {
      res.redirect('https://' + req.get('Host') + req.url);
    } else
      next();
  });
}

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({type: 'application/*+json'}));


// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

const home = require ('./routes/home');
const createProfile = require('./routes/createProfile');
const profileDashboard = require('./routes/profileDashboard')

app.use('/', home);
app.use('/signup', createProfile);
app.use('/profileDashboard', profileDashboard)

app.listen(process.env.PORT || 3000);

module.exports = app;