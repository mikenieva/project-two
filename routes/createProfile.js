const express = require('express');
const Router  = express.Router();
const bodyParser = require("body-parser");

/* GET home page */
Router.get('/', (req, res, next) => {
  res.render('createProfile');
});

Router.post('/', (req, res, next)=>{ 
  // let app = express(); 
  // app.use(bodyParser);
  console.log(req.body);
})

module.exports = Router;
