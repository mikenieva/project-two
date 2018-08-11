const express = require('express');
const Router  = express.Router();

/* GET home page */
Router.get('/', (req, res, next) => {
  res.render('createProfile');
});

Router.post('/', (req, res, next)=>{
  console.log(req.body.params);
})

module.exports = Router;
