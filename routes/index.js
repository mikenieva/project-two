const express = require('express');
const router  = express.Router();
const Product = require('../models/product');
const Distribuitor = require('../models/distribuitor');
const User = require('../models/user');

/* GET home page */
router.get('/', async (req, res, next) => {
  await Product.create({ name: 4, description: 'Healthy vegetables.' });
  await Distribuitor.create({ name: 4, description: 'Healthy vegetables.' });
  await User.create({ name: 4, description: 'Healthy vegetables.' });
  res.render('index');
});

module.exports = router;