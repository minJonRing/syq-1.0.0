const mongoose = require("mongoose");
const { addOne, updateOne } = require("./fn");
const Schema = mongoose.Schema;
let keyword = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, default: '' },
  keywords: { type: String, default: '' },
  description: { type: String, default: '' },
  type: { type: Number, required: true, unique: true },
  isDelete: { type: Boolean, default: false },
  createtime: { type: Date, default: Date.now }
})

keyword.statics = {
  getOne(option) {
    return new Promise((resolev, reject) => {
      this.findOne({
        type: option.type
      })
        .exec((err, doc) => {
          try {
            if (!err && doc) {
              resolev({ code: 200, msg: '数据请求成功', data: doc })
            } else {
              resolev({ code: 200, msg: err, data: doc })
            }
          } catch (e) {
            resolev({ code: 200, msg: e, data: '' })
          }
        })
    })
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