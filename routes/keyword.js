const router = require('koa-router')()
const keyword = require('../schema/keyword')


router.get('/keyword/one', async (ctx, next) => {
  await next()
  const data = await keyword.getOne(ctx.query)
  ctx.body = data
})
router.post('/keyword/add', async (ctx, next) => {
  await next()
  const data = await keyword.addOne(ctx.request.body)
  ctx.body = data
})

router.post('/keyword/edit', async (ctx, next) => {
  await next()
  const data = await keyword.updateOne(ctx.request.body)
  ctx.body = data
})
module.exports = router
