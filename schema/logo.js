const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { getAll, getList, getOne, addOne, updateOne } = require("./fn");

let logo = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String },
  link: { type: String, required: true },
  sort: { type: Number, required: true, default: 1 },
  isDelete: { type: Boolean, default: false },
  createtime: { type: Date, default: Date.now }
})

logo.statics = {
  getAll(option) {
    return getAll.call(this, option)
  },
  getList(option) {
    return getList.call(this, option, option.handle)
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
  // getList(option = { current: 1, pageSize: 10, }) {
  //   return new Promise((resolev, reject) => {
  //     this.countDocuments({ isDelete: false }).exec((err, len) => {
  //       try {
  //         if (!err && len) {
  //           this.find({ isDelete: false }, { _id: 0 }).skip((option.current - 1) * option.pageSize)
  //             .limit((option.pageSize - 0))
  //             .sort({ 'createtime': -1 })
  //             .exec((err, doc) => {
  //               try {
  //                 if (!err && doc) {
  //                   resolev({ code: 200, msg: '数据请求成功', data: { list: doc, total: len } })
  //                 } else {
  //                   resolev({ code: 204, msg: err, data: '' })
  //                 }
  //               } catch (e) {
  //                 resolev({ code: 204, msg: '网络波动', data: '' })
  //               }
  //             })
  //         } else {
  //           resolev({ code: 204, msg: err, data: '' })
  //         }
  //       } catch (e) {
  //         resolev({ code: 204, msg: '网络波动', data: '' })
  //       }

  //     })
  //   })
  // },
  // async addOne(option) {
  //   const len = await new Promise((resolev, reject) => {
  //     this.find({}).exec((err, doc) => {
  //       try {
  //         if (!err && doc) {
  //           resolev(doc.length)
  //         } else {
  //           resolev(-1)
  //         }
  //       } catch (e) {
  //         resolev(-1)
  //       }
  //     })
  //   })

  //   return new Promise((resolev, reject) => {
  //     if (len !== -1) {
  //       let db = Object.assign({ id: len + 1 }, option)
  //       this.create(db, (err, doc) => {
  //         try {
  //           if (!err && doc) {
  //             resolev({ code: 200, msg: '新增成功', data: '' })
  //           } else {
  //             resolev({ code: 204, msg: err, data: '' })
  //           }
  //         } catch (e) {
  //           resolev({ code: 204, msg: '网络波动', data: doc })
  //         }
  //       })
  //     } else {
  //       resolev({ code: 204, msg: '网络波动', data: doc })
  //     }
  //   })

  // },
  // getOne(option) {
  //   return new Promise((resolev, reject) => {
  //     this.findOne({
  //       id: option.id
  //     })
  //       .exec((err, doc) => {
  //         try {
  //           if (!err && doc) {
  //             resolev({ code: 200, msg: '数据请求成功', data: doc })
  //           } else {
  //             resolev({ code: 204, msg: err, data: '' })
  //           }
  //         } catch (e) {
  //           resolev({ code: 204, msg: '网络波动', data: '' })
  //         }
  //       })
  //   })
  // },
  // updateOne(option) {
  //   return new Promise((resolev, reject) => {
  //     this.update({
  //       id: option.id
  //     }, option)
  //       .exec((err, doc) => {
  //         try {
  //           if (!err && doc) {
  //             resolev({ code: 200, msg: '更新成功', data: '' })
  //           } else {
  //             resolev({ code: 204, msg: err, data: '' })
  //           }
  //         } catch (e) {
  //           resolev({ code: 204, msg: '网络波动', data: '' })
  //         }
  //       })
  //   })
  // }
}
let logoModel = mongoose.model('Logo', logo);

module.exports = logoModel;