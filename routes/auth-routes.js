const express = require('express');
const Router = express.Router();


Router.get("/", (req,res,next) => {
    res.render('home');
})



module.exports = Router;