const express = require('express');
const Router = express.Router();

Router.get('/', (req, res, next) => {
    res.render('profileDashboard')
})

module.exports = Router