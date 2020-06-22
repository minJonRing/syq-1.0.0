const router = require('koa-router')()
const logo = require('../schema/logo')

router.get('/logo/all', async (ctx, next) => {
  await next()
  const data = await logo.getAll(ctx.query)
  ctx.body = data
})
router.get('/logo/list', async (ctx, next) => {
  await next()
  const data = await logo.getList(ctx.query)
  ctx.body = data
})
router.get('/logo/one', async (ctx, next) => {
  await next()
  const data = await logo.getOne(ctx.query)
  ctx.body = data
})
router.post('/logo/add', async (ctx, next) => {
  await next()
  const data = await logo.addOne(ctx.request.body)
  ctx.body = data
})

router.post('/logo/edit', async (ctx, next) => {
  await next()
  const data = await logo.updateOne(ctx.request.body)
  ctx.body = data
})
module.exports = router
