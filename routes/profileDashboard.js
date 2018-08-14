const express = require('express');
const Router = express.Router();

Router.use((req,res,next) =>{
    if(req.session.currentEmail){
        next();
    } else {
        res.redirect("/")
    }
});

Router.get('/', (req, res, next) => {
    res.render('profileDashboard')
})





module.exports = Router;