require('dotenv').config();

const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const favicon      = require('serve-favicon');
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const hbs          = require('hbs');

const authRoutes = require ('./routes/auth-routes');

mongoose.Promise = Promise;
mongoose
  .connect(process.env.DB || 'mongodb://localhost:27017/project-two', {useNewUrlParser: true, useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('forceSSLOptions', {
  enable301Redirects: true,
  trustXFPHeader: false,
  httpsPort: 443,
  sslRequiredMessage: 'SSL Required.'
});

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const index = require('./routes/index');
app.use('/', index);

const contacto = require('./routes/contacto');
app.use('/contacto', contacto);

const autenticacion = require('./routes/passportRoutes');
app.use('/auth', autenticacion);

const createProfile = require('./routes/createProfile');
app.use('/createProfile', createProfile);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

module.exports = app;


