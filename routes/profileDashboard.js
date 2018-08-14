const express = require('express');
const paypal = require('paypal-rest-sdk');
const Router = express.Router();
const User = require('../models/user');


Router.use((req,res,next) =>{
    if(req.session.currentEmail){
        next();
    } else {
        res.redirect("/")
    }
});




Router.get('/', (req, res, next) => {
    res.render('profileDashboard', {user: req.session.currentEmail})
})

module.exports = Router;