const router = require('koa-router')()
const project = require('../schema/project')

router.get('/project/all', async (ctx, next) => {
  await next()
  const data = await project.getAll(ctx.query)
  ctx.body = data
})
router.get('/project/list', async (ctx, next) => {
  await next()
  const data = await project.getList(ctx.query)
  ctx.body = data
})

router.post('/project/add', async (ctx, next) => {
  await next()
  const data = await project.addOne(ctx.request.body)
  ctx.body = data
})

router.post('/project/upload', async (ctx, next) => {
  await next()
  const data = await project.updateOne(ctx.request.body)
  ctx.body = data
})

router.get('/project/detail', async (ctx, next) => {
  await next()
  const data = await project.getOne(ctx.query)
  ctx.body = data
})
module.exports = router
