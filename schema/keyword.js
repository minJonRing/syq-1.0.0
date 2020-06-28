const mongoose = require("mongoose");
const { getAll, addOne, updateOne } = require("./fn");
const Schema = mongoose.Schema;
let keyword = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, default: '' },
  keywords: { type: String, default: '' },
  description: { type: String, default: '' },
  type: { type: String, required: true, unique: true },
  isDelete: { type: Boolean, default: false },
  createtime: { type: Date, default: Date.now }
})

keyword.statics = {
  getAll(option) {
    return getAll.call(this, option)
  },
  // getOne(option) {
  //   return getOne.call(this, option)
  // },
  addOne(option) {
    return addOne.call(this, option)
  },
  updateOne(option) {
    return updateOne.call(this, option)
  }
}

let keywordModel = mongoose.model('keyword', keyword);

module.exports = keywordModel;