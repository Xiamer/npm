import util from './util'

/***
 * 获取身份证信息
 *
 * @param {String} id
 *
 * @returns {Object} {age: , birthday: ,gender: M | F}
 *
 */
const getIdCardInfo =(id)=> {
  if (!util.checkIdCardNo(id)) return null
  return util.getIdCardInfo(id)
}


export {
  getIdCardInfo
}
