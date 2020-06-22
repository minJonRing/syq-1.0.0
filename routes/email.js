const router = require('koa-router')()
const email = require('../schema/email')
const nodemailer = require('nodemailer')

router.get('/email/list', async (ctx, next) => {
  await next()
  const data = await email.getOne(ctx.query)
  ctx.body = data
})

router.get('/email/one', async (ctx, next) => {
  await next()
  const data = await email.getOne(ctx.query)
  ctx.body = data
})

router.post('/email/add', async (ctx, next) => {
  await next()
  const data = await email.addOne(ctx.request.body)
  ctx.body = data
})

router.post('/email/edit', async (ctx, next) => {
  await next()
  const data = await email.updateOne(ctx.request.body)
  ctx.body = data
})

router.post('/email/send', async (ctx, next) => {
  await next()
  const option = ctx.request.body
  var transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    secureConnection: true,
    // 我们需要登录到网页邮箱中，然后配置SMTP和POP3服务器的密码
    auth: {
      user: option.emailName || 'tqr19950122@163.com',
      pass: option.emailPass || 'tqr19950122tqr'
    }
  });

  const emailObj = {
    // 发送邮件的地址
    from: option.emailName || 'tqr19950122@163.com', // login user must equal to this user
    // 接收邮件的地址
    to: option.to, // xrj0830@gmail.com
    // 邮件主题
    subject: option.subject,
    // 以HTML的格式显示，这样可以显示图片、链接、字体颜色等信息
    html: option.html
  }
  console.log(emailObj)
  const body = await new Promise((resolev, reject) => {
    transporter.sendMail(emailObj, (error, info = {}) => {
      if (error) {
        resolev({ code: 200, msg: error, data: '' })
      } else {
        resolev({ code: 200, msg: '邮件发送成功!', data: '' })
      }
    });
  })
  ctx.body = body
})

module.exports = router
