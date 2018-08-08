const express = require('express');
const router  = express.Router();
const Product = require('../models/product');
const Distribuitor = require('../models/distribuitor');
const User = require('../models/User');

/* GET home page */
router.get('/', async (req, res, next) => {
  res.render('index');
});

module.exports = router;