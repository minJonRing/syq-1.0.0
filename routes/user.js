const router = require('koa-router')()
const user = require('../schema/user')

// const User = new user({
//   name: "超级管理员",
//   user: "admin",
//   pass: "111111",
// })

// User.save()

router.post('/user/login', async (ctx, next) => {
  await next()
  const data = ctx.request.body
  const db = await new Promise((resolev, reject) => {
    user.find({ user: data.user, pass: data.pass }, (err, doc) => {
      try {
        if (!err && doc) {
          resolev({ code: 200, data: '', msg: '登入成功' })
        } else {
          resolev({ code: 204, data: '', msg: err })
        }
      } catch (e) {
        resolev({ code: 200, data: '', msg: '网络波动' })
      }
    })
  })
  ctx.body = db
})

router.post('/user/info', async (ctx, next) => {
  await next()
  const data = ctx.request.body
  const db = await new Promise((resolev, reject) => {
    user.find({ user: data.user, pass: data.pass }, (err, doc) => {
      try {
        if (!err && doc) {
          resolev({ code: 200, msg: doc })
        } else {
          resolev({ code: 204, msg: err })
        }
      } catch (e) {
        resolev({ code: 204, msg: '网络波动' })
      }
    })
  })

  ctx.body = db
})

router.post('/user/logout', async (ctx, next) => {
  await next()
  ctx.body = { code: 200, data: {} }
})
module.exports = router
