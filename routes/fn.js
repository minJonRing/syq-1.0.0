const keyword = require('../schema/keyword')
const getKeywords = (query) => keyword.getOne(query)

module.exports = {
  getKeywords: getKeywords
}