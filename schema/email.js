const mongoose = require("mongoose");
const { getList, addOne, getOne, updateOne } = require("./fn");
const Schema = mongoose.Schema;
let email = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  city: { type: String, default: '' },
  company: { type: String, default: '' },
  isReply: { type: Boolean, default: false },
  message: { type: String, default: '' },
  isDelete: { type: Boolean, default: false },
  isSend: { type: Boolean, default: false },
  createtime: { type: Date, default: Date.now }
})

email.statics = {
  getList(option) {
    let filter = Object.assign({
      isDelete: false
    }, option.isSend + '' ? { isSend: option.isSend } : {})
    return getList.call(this, option, { filter, sort: { 'id': -1 } })
  },
  getOne(option) {
    return getOne.call(this, option)
  },
  addOne(option) {
    return addOne.call(this, option)
  },
  updateOne(option) {
    return updateOne.call(this, option)
  }
}

let emailModel = mongoose.model('email', email);

module.exports = emailModel;