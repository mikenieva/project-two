const express = require('express');
const authRoutes = express.Router();


authRoutes.get("/", (req,res,next) => {
    res.render('home');
})



module.exports = authRoutes;