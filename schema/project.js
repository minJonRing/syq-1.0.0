const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { getAll, getList, getOne, addOne, updateOne } = require("./fn");

let project = new Schema({
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

project.statics = {
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
  // getAll() {
  //   return new Promise((resolev, reject) => {
  //     this.find({ isDelete: false })
  //       .sort({ 'id': 1 })
  //       .exec((err, doc) => {
  //         try {
  //           if (!err && doc) {
  //             resolev({ code: 200, msg: '数据请求成功', data: doc })
  //           } else {
  //             resolev({ code: 204, msg: err, data: '' })
  //           }
  //         } catch (e) {
  //           resolev({ code: 204, msg: e, data: '' })
  //         }
  //       })

  //   })
  // },
  // getList(option = { name: '', type: '', current: 1, pageSize: 10 }) {
  //   const name = new RegExp(option.name, 'i') //不区分大小写
  //   let filter = Object.assign({
  //     $or: [ //多条件，数组
  //       { name: { $regex: name } },
  //     ],
  //     isDelete: false
  //   }, option.type ? { type: option.type } : {})
  //   return new Promise((resolev, reject) => {
  //     this.countDocuments().exec((err, len) => {
  //       try {
  //         if (!err) {
  //           this.find(filter).skip((option.current - 1) * option.pageSize)
  //             .limit(option.pageSize - 0)
  //             .sort({ 'id': -1 })
  //             .exec((err, doc) => {
  //               try {
  //                 if (!err && doc) {
  //                   resolev({ code: 200, msg: '数据请求成功', data: { list: doc, total: len } })
  //                 } else {
  //                   resolev({ code: 204, msg: err, data: '' })
  //                 }
  //               } catch (e) {
  //                 resolev({ code: 204, msg: e, data: '' })
  //               }
  //             })
  //         } else {
  //           resolev({ code: 204, msg: err, data: '' })
  //         }
  //       } catch (e) {
  //         resolev({ code: 204, msg: e, data: '' })
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
  //           resolev({ code: 204, msg: e, data: '' })
  //         }
  //       })
  //     } else {
  //       resolev({ code: 204, msg: '网络波动', data: '' })
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
  //           resolev({ code: 204, msg: e, data: '' })
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
  //           resolev({ code: 204, msg: e, data: '' })
  //         }
  //       })
  //   })
  // }
}
let projectModel = mongoose.model('Project', project);

module.exports = projectModel;