const router = require('koa-router')()
const homeVideo = require('../schema/home.video')
const homeType = require('../schema/home.type')

// 获取/设置-首页视频
router.get('/set/home/video', async (ctx, next) => {
  await next()
  const db = await homeVideo.getList()
  ctx.body = db
}).post('/set/home/video', async (ctx, next) => {
  await next()
  const data = ctx.request.body
  const db = await homeVideo.updateOne(data)
  ctx.body = db
})
// 获取/设置-首页类型图片
router.get('/set/home/type', async (ctx, next) => {
  await next()
  const db = await homeType.getList()
  ctx.body = db
}).post('/set/home/type', async (ctx, next) => {
  await next()
  const data = ctx.request.body
  const db = await homeType.updateOne(data)
  ctx.body = db
})
// router.post('/set/home/type', async (ctx, next) => {
//   await next()
//   const data = ctx.request.body
//   const db = await new Promise((resolev, reject) => {
//     user.find({ user: data.user, pass: data.pass }, (err, doc) => {
//       try {
//         if (!err && doc) {
//           resolev({ code: 200, msg: doc })
//         } else {
//           resolev({ code: 204, msg: err })
//         }
//       } catch (e) {
//         resolev({ code: 204, msg: '网络波动' })
//       }
//     })
//   })

//   ctx.body = db
// })
module.exports = router
