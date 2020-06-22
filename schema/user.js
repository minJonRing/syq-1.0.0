const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let user = new Schema({
  name: { type: String, required: true },
  user: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  isDelete: { type: Boolean, default: false },
  createtime: { type: Date, default: Date.now }
})

let puserModel = mongoose.model('User', user);

module.exports = puserModel;