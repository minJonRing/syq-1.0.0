const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let hometype = new Schema({
  link1: { type: String, default: '' },
  link2: { type: String, default: '' },
  link3: { type: String, default: '' },
  link4: { type: String, default: '' },
  link5: { type: String, default: '' },
  link6: { type: String, default: '' },
  isDelete: { type: Boolean, default: false },
  createtime: { type: Date, default: Date.now }
})

hometype.statics = {
  getList() {
    return new Promise((resolev, reject) => {
      this.find({}, { createtime: 0, isDelete: 0 }).exec((err, doc) => {
        try {
          if (!err && doc) {
            resolev({ code: 200, msg: '数据获取成功', data: doc })
          } else {
            resolev({ code: 200, msg: err, data: '' })
          }
        } catch (e) {
          resolev({ code: 200, msg: '网络波动', data: '' })
        }
      })
    })
  },
  async addOne(option) {
    const data = await new Promise((resolev, reject) => {
      this.find({}).exec((err, doc) => {
        try {
          if (!err && doc) {
            resolev(doc)
          } else {
            resolev(-1)
          }
        } catch (e) {
          resolev(-1)
        }
      })
    })

    return new Promise((resolev, reject) => {
      if (data !== -1) {
        if (!data.length) {
          this.create(option, (err, doc) => {
            try {
              if (!err && doc) {
                resolev({ code: 200, msg: '设置成功', data: '' })
              } else {
                resolev({ code: 200, msg: err, data: '' })
              }
            } catch (e) {
              resolev({ code: 200, msg: '网络波动', data: '' })
            }
          })
        } else {
          resolev({ code: 200, msg: '设置成功', data: '' })
        }
      } else {
        resolev({ code: 200, msg: '网络波动', data: '' })
      }
    })

  },
  async updateOne(option) {
    return new Promise((resolev, reject) => {
      this.update({ _id: option._id }, option).exec((err, doc) => {
        try {
          if (!err && doc) {
            resolev({ code: 200, msg: '设置成功', data: '' })
          } else {
            resolev({ code: 200, msg: err, data: '' })
          }
        } catch (e) {
          resolev({ code: 200, msg: '网络波动', data: '' })
        }
      })
    })
  }
}
let homevideoModel = mongoose.model('Hometype', hometype);

module.exports = homevideoModel;