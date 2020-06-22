const router = require('koa-router')()
const news = require('../schema/news')

router.get('/news/all', async (ctx, next) => {
  await next()
  const data = await news.getAll(ctx.query)
  ctx.body = data
})
router.get('/news/list', async (ctx, next) => {
  await next()
  const data = await news.getList(ctx.query)
  ctx.body = data
})

router.post('/news/add', async (ctx, next) => {
  await next()
  const data = await news.addOne(ctx.request.body)
  ctx.body = data
})

router.post('/news/upload', async (ctx, next) => {
  await next()
  const data = await news.updateOne(ctx.request.body)
  ctx.body = data
})

router.get('/news/detail', async (ctx, next) => {
  await next()
  const data = await news.getOne(ctx.query)
  ctx.body = data
})
module.exports = router
