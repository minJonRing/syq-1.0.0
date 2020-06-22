const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// 数据库
const mongoose = require("mongoose")
mongoose.set('useCreateIndex', true)
let db = mongoose.connect("mongodb://localhost:27017/syq");

mongoose.connection.on("open", function () {
  console.log("mongodb connection success!")
})
// 初始化数据
const init = require("./init")
init()
// 路由
const index = require('./routes/index')
const user = require('./routes/user')
const project = require('./routes/project')
const logo = require('./routes/logo')
const keyword = require('./routes/keyword')
const email = require('./routes/email')
// 文件上传
const upload = require('./routes/upload')
// 首页设置
const set = require('./routes/set')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  map: { html: 'ejs' }
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// upload
app.use(upload.routes(), upload.allowedMethods())
// set
app.use(set.routes(), set.allowedMethods())
// routes
app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(project.routes(), project.allowedMethods())
app.use(logo.routes(), logo.allowedMethods())
app.use(keyword.routes(), keyword.allowedMethods())
app.use(email.routes(), email.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
