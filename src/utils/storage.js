// 封装一个模块,来使用LocalStorage

/**
 * 获取localStorage
 * @param {*} name
 */
export const getItem = (name) => {
  return JSON.parse(localStorage.getItem(name))
}
/**
 * 设置localStorage
 * @param {*} name
 * @param {*} data
 */
export const setItem = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}

/**
 * 删除localStorage
 * @param {*} name
 */
export const removeItem = (name) => {
  return localStorage.removeItem(name)
}
