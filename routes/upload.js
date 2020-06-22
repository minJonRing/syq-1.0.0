const router = require('koa-router')()
const formidable = require('formidable')
const path = require("path")
const config = require("../config.js")
// 上传封面
router.post("/upload/img", upload('img'));
router.post("/upload/video", upload('video'));

function upload(url) {
  return async function (ctx, next) {
    let msg = "上传失败";
    await next()
    let imgArr = [];
    let form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = path.join(config.default._rootdir + "/public/upload/" + url);
    form.maxFieldsSize = 500 * 1024 * 1024;//上传文件的最大大小
    form.maxFileSize = 500 * 1024 * 1024;//上传文件的最大大小
    form.keepExtensions = true;
    form.multiples = true;
    await new Promise((resolve, reject) => {
      try {
        form.parse(ctx.req, (err, fields, files) => {
          if (err) { throw err; resolve(imgArr); return; }
          if (Array.isArray(files.file)) {
            for (let i in files.file) {
              let url = files.file[i].path.replace(/.+(public)/g, "").replace(/(\\)/g, '/');
              imgArr.push(url)
            }
          } else {
            let url = files.file.path.replace(/.+(public)/g, "").replace(/(\\)/g, '/');
            imgArr.push(url)
          }
          resolve(imgArr)
        })
      } catch (error) {
        resolve(imgArr)
      }
    })

    if (imgArr.length) {
      msg = "上传成功";
    }
    ctx.body = { code: 200, msg: msg, errno: 0, data: imgArr }
  }
}
module.exports = router;