const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/planeacionDeMenu', (req, res, next) => {
  res.render('planeacionDeMenu');
});

module.exports = router;
