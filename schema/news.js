const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { getAll, getList, getOne, addOne, updateOne } = require("./fn");

let news = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: Number, default: 0 },
  sort: { type: Number, required: true, default: 1 },
  cover: { type: String, required: true },
  video: { type: String },
  isLong: { type: Boolean, default: false },
  isDelete: { type: Boolean, default: false },
  content: { type: String, required: true },
  createtime: { type: Date, default: Date.now },
  browse: { type: Number, default: 0 }
})

news.statics = {
  getAll(option) {
    return getAll.call(this, option)
  },
  getList(option = { name: '', type: '', current: 1, pageSize: 10 }) {
    const name = new RegExp(option.name, 'i') //不区分大小写
    let filter = Object.assign({
      $or: [ //多条件，数组
        { name: { $regex: name } },
      ],
      isDelete: false
    }, option.type ? { type: option.type } : {})
    return getList.call(this, option, { filter, sort: { 'id': -1 } })
  },
  addOne(option) {
    return addOne.call(this, option)
  },
  getOne(option) {
    return getOne.call(this, option)
  },
  updateOne(option) {
    return updateOne.call(this, option)
  }
}
let newsModel = mongoose.model('News', news);

module.exports = newsModel;