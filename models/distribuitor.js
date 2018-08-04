const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const distribuitorSchema = new Schema({
  name: String,
  description: String,
  place: String
});

const Distribuitor = mongoose.model("Distribuitor", distribuitorSchema);

module.exports = Distribuitor;