const express = require('express');
const Router  = express.Router();
const User = require('../models/user');

const bcrypt = require("bcrypt");
const bcryptSalt = 10;


/* GET home page */
Router.get('/', (req, res, next) => {
  res.render('createProfile');
});

Router.post('/', (req, res, next)=>{ 

  const email = req.body.Email;
  const password = req.body.Password;

  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  const name = req.body.Nombre;
  const lastname = req.body.Apellido;
  const age = req.body.Edad;
  const reason = req.body.Motivo;
  const newsletter = req.body.Newsletter;

  const numComidas = req.body.Comidas;
  const hrHambre = req.body.Horahambre;
  const postre = req.body.Postre;
  const comerEntreComida = req.body.Entrecomida;

  const alergia = req.body.Alergias;
  const cualAlergia = req.body.cualAlergia;
  const alergiaSustancia = req.body.alergiaSustancia;
  const cualAlergiaSustancia = req.body.cualAlergiaSustancia;
  const restriccionAlimenticia = req.body.restriccionAlimenticia;
  const cualRestriccionAlimenticia = req.body.cualRestriccionAlimenticia;
  const medicamentos = req.body.medicamentos;
  const efectosSecundarios = req.body.efectosSecundarios;
  const malestarCronico = req.body.malestarCronico;

  const peso = req.body.peso;
  const altura = req.body.altura;
  const imc = req.body.imc;

  const user = new User({
    "email": email,
    "password": hashPass,
    "name": name,
    "lastname": lastname,
    "age": age,
    "reason": reason,
    "newsletter": newsletter,
    "numComidas": numComidas,
    "hrHambre": hrHambre,
    "postre": postre,
    "comerEntreComida": comerEntreComida,
    "alergia": alergia,
    "cualAlergia": cualAlergia,
    "alergiaSustancia": alergiaSustancia,
    "cualAlergiaSustancia": cualAlergiaSustancia,
    "restriccionAlimenticia": restriccionAlimenticia,
    "cualRestriccionAlimenticia": cualRestriccionAlimenticia,
    "medicamentos": medicamentos,
    "efectosSecundarios": efectosSecundarios,
    "malestarCronico": malestarCronico,
    "peso": peso,
    "altura": altura,
    "imc": imc
  });

  if(email === "" || password === ""){
    res.render("createProfile", {
        errorMessage: "Completa los campos correctamente"
    });
    return;
}

  User.findOne({"email": email}, "email", (err,email) => {
    if( email !== null){
      res.render("createProfile", {
          errorMessage: "Cambia el correo electrónico"
      })            
      return;
    }
    
    user.save((err) => {
      if(err){
        res.render("home", {
            errorMessage: "Error."
        });
    } else {
        res.redirect("/");
    }
    });
  });
});

module.exports = Router;
