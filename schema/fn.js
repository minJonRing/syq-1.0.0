const getAll = async function (sort = { 'id': -1 }) {
  return new Promise((resolev, reject) => {
    this.find({ isDelete: false })
      .sort(sort)
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
}

const getList = async function (option, handle = { filter: { isDelete: false }, sort: { 'id': -1 } }) {
  return new Promise((resolev, reject) => {
    this.countDocuments(handle.filter).exec((err, len) => {
      try {
        if (!err) {
          this.find(handle.filter).skip((option.current - 1) * option.pageSize)
            .limit(option.pageSize - 0)
            .sort(handle.sort)
            .exec((err, doc) => {
              try {
                if (!err && doc) {
                  resolev({ code: 200, msg: '数据请求成功', data: { list: doc, total: len } })
                } else {
                  resolev({ code: 200, msg: err, data: doc })
                }
              } catch (e) {
                resolev({ code: 200, msg: e, data: '' })
              }
            })
        } else {
          resolev({ code: 200, msg: err, data: '' })
        }
      } catch (e) {
        resolev({ code: 200, msg: e, data: '' })
      }

    })
  })
}

const getOne = async function (option) {
  return new Promise((resolev, reject) => {
    this.findOne({
      id: option.id
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
}

const addOne = async function (option) {
  const len = await new Promise((resolev, reject) => {
    this.find({}).exec((err, doc) => {
      try {
        if (!err && doc) {
          resolev(doc.length)
        } else {
          resolev(-1)
        }
      } catch (e) {
        resolev(-1)
      }
    })
  })
  return new Promise((resolev, reject) => {
    if (len !== -1) {
      const obj = { ...option, ...{ id: len + 1 } }
      this.create(obj, (err, doc) => {
        try {
          if (!err && doc) {
            resolev({ code: 200, msg: '添加成功', data: '' })
          } else {
            resolev({ code: 200, msg: err, data: doc })
          }
        } catch (e) {
          resolev({ code: 200, msg: e, data: '' })
        }
      })
    } else {
      resolev({ code: 200, msg: '网络波动', data: '' })
    }
  })
}


const updateOne = async function (option) {
  return new Promise((resolev, reject) => {
    this.update({ id: option.id }, option).exec((err, doc) => {
      try {
        if (!err && doc) {
          resolev({ code: 200, msg: '更新成功', data: '' })
        } else {
          resolev({ code: 200, msg: err, data: '' })
        }
      } catch (e) {
        resolev({ code: 200, msg: e, data: '' })
      }
    })
  })
}


module.exports = {
  getAll: getAll,
  getList: getList,
  getOne: getOne,
  addOne: addOne,
  updateOne: updateOne
}