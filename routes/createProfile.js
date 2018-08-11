const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('createProfile');
});

router.post('/', (req, res, next)=>{
  console.log(req.body.params);
})

module.exports = router;
