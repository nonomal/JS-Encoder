/**
 * 获取详细数据类型
 * @param any data 
 */
export function judgeType(data) {
  if (data === null) return null
  const type = typeof data
  if (type === 'object') return judgeObjectType(data)
  return type
}

function judgeObjectType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}