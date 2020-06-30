const router = require('koa-router')()

const keywords = require('./fn')

const initObj = {
  title: '杭州思影奇',
  keywords: '杭州思影奇',
  description: '杭州思影奇'
}

router.get('/', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'index' })
  const obj = keys.data ? {
    title: keys.data.title || '杭州思影奇',
    keywords: keys.data.keywords,
    description: keys.data.description
  } : initObj
  await ctx.render('index', obj)
})
router.get('/project', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'project' })
  const obj = keys.data ? {
    title: keys.data.title || '杭州思影奇-案例',
    keywords: keys.data.keywords,
    description: keys.data.description
  } : initObj
  await ctx.render('project', obj)
})
router.get('/project-info', async (ctx, next) => {
  // const keys = await keywords.getKeywords({ type: 'project' })
  // const obj = keys.data ? {
  //   title: keys.data.title || '杭州思影奇',
  //   keywords: keys.data.keywords,
  //   description: keys.data.description
  // } : initObj
  await ctx.render('project-item')
})
router.get('/news', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'news' })
  const obj = keys.data ? {
    title: keys.data.title || '杭州思影奇-新闻',
    keywords: keys.data.keywords,
    description: keys.data.description
  } : initObj
  await ctx.render('news', obj)
})
router.get('/news-info', async (ctx, next) => {
  // const keys = await keywords.getKeywords({ type: 'news' })
  // const obj = keys.data ? {
  //   title: keys.data.title || '杭州思影奇',
  //   keywords: keys.data.keywords,
  //   description: keys.data.description
  // } : initObj
  await ctx.render('news-item')
})
router.get('/company', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'company' })
  const obj = keys.data ? {
    title: keys.data.title || '杭州思影奇-关于思影奇',
    keywords: keys.data.keywords,
    description: keys.data.description
  } : initObj
  await ctx.render('company', obj)
})
router.get('/client', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'client' })
  const obj = keys.data ? {
    title: keys.data.title || '杭州思影奇',
    keywords: keys.data.keywords,
    description: keys.data.description
  } : initObj
  await ctx.render('client', obj)
})
router.get('/join', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'join' })
  const obj = keys.data ? {
    title: keys.data.title || '杭州思影奇-加入我们',
    keywords: keys.data.keywords,
    description: keys.data.description
  } : initObj
  await ctx.render('join', obj)
})
router.get('/contact', async (ctx, next) => {
  const keys = await keywords.getKeywords({ type: 'contact' })
  const obj = keys.data ? {
    title: keys.data.title || '杭州思影奇-联系我们',
    keywords: keys.data.keywords,
    description: keys.data.description
  } : initObj
  await ctx.render('contact', obj)
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
