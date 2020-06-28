const router = require('koa-router')()

const keywords = require('./fn')


router.get('/', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'index' })
  await ctx.render('index', {
    // title: keys.data.title || '杭州思影奇',
    // keywords: keys.data.keywords,
    // description: keys.data.description
  })
})
router.get('/project', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'project' })
  await ctx.render('project', {
    // title: keys.data.title || '杭州思影奇',
    // keywords: keys.data.keywords,
    // description: keys.data.description
  })
})
router.get('/news', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'news' })
  await ctx.render('news', {
    // title: keys.data.title || '杭州思影奇',
    // keywords: keys.data.keywords,
    // description: keys.data.description
  })
})
router.get('/company', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'company' })
  await ctx.render('company', {
    // title: keys.data.title || '杭州思影奇',
    // keywords: keys.data.keywords,
    // description: keys.data.description
  })
})
router.get('/client', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'client' })
  await ctx.render('client', {
    // title: keys.data.title || '杭州思影奇',
    // keywords: keys.data.keywords,
    // description: keys.data.description
  })
})
router.get('/join', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'join' })
  await ctx.render('join', {
    // title: keys.data.title || '杭州思影奇',
    // keywords: keys.data.keywords,
    // description: keys.data.description
  })
})
router.get('/contact', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'contact' })
  await ctx.render('contact', {
    // title: keys.data.title || '杭州思影奇',
    // keywords: keys.data.keywords,
    // description: keys.data.description
  })
})

router.get('/admin', async (ctx, next) => {
  await ctx.render('admin', {
    title: 'Hello Koa 2!'
  })
})

router.get('/keyword/tqr', async (ctx, next) => {
  await ctx.render('1', {
    title: 'Hello Koa 2!'
  })
})



module.exports = router
