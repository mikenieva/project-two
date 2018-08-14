const express = require('express');
const Router  = express.Router();
const User = require('../models/User');


/* GET home page */
Router.get('/', (req, res, next) => {
  res.render('createProfile');
});

Router.post('/', (req, res, next)=>{ 

  const email = req.body.Email;
  const password = req.body.Password;
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
  const cualMedicamentos = req.body.cualMedicamentos;
  const efectosSecundarios = req.body.efectosSecundarios;
  const malestarCronico = req.body.malestarCronico;

  const peso = req.body.peso;
  const altura = req.body.altura;
  const imc = req.body.imc;

  const user = new User({
    "email": email,
    "password": password,
    "name": name,
    "lastname": lastname,
    "age": age,
    "reason": reason,
    "newsletter": newsletter
  });

  user.save((err)=>{
    if(err) return handleError(err);    
  });
})

module.exports = Router;
