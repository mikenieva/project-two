const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  lastname: String,
  age: String,
  reason: String,
  newsletter: Boolean,
  numComidas: String,
  hrHambre: String,
  postre: String,
  comerEntreComida: String,
  alergia: String,
  cualAlergia: String,
  alergiaSustancia: String,
  cualAlergiaSustancia: String,
  restriccionAlimenticia: String,
  cualRestriccionAlimenticia: String,
  medicamentos: String,
  efectosSecundarios: String,
  malestarCronico: String,
  peso: String,
  altura: String,
  imc: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;