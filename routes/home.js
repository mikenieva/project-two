const express = require('express');
const Router  = express.Router();
const User  = require("../models/User");
const bcrypt = require("bcrypt");

Router.get("/", (req,res,next) => {
    res.render('home');
});

Router.post("/", (req,res,next) => {
    console.log(req);
    const email = req.body.email;
    const password = req.body.password;

    if(email === "" || password === ""){
        res.render("home", {
            errorMessage: "Coloca tu correo y contraseña."
        })
        return;
    }

    User.findOne({"email": email}, (err,email)=>{
        if(err || !email){
            res.render("home", {
                errorMessage: "El usuario no existe."
            });
            return
        }
        if (bcrypt.compareSync(password, email.password)){
            req.session.currentEmail = email;
            res.redirect("/profileDashboard");
        } else{
            res.render("home", {
                errorMessage: "Tu contraseña es incorrecta."
            })
        }
    })
})

Router.get("/logout", (req,res,next) => {
    req.session.destroy((err) => {
        res.redirect("/");
    })
})



module.exports = Router;