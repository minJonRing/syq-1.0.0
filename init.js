const homevideoModel = require('./schema/home.video')
const hometypeModel = require('./schema/home.type')

// 初始化数据库
async function init() {
  homevideoModel.addOne({ link: '' })
  hometypeModel.addOne({})
}

module.exports = init