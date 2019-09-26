/**
 * 存储localStorage
 * @param {String} name
 * @param {*} content
 */
export const setStore = (name, content) => {
  if (!name) {
    return
  }
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 * @param {String} name
 * @param {Boolean} isConversion 判断是否需要把json转成json对象
 */
export const getStore = (name, isConversion = false) => {
  if (!name) {
    return
  }
  let result = window.localStorage.getItem(name)
  if (isConversion) {
    result = JSON.parse(result)
  }
  return result
}

/**
 * 删除localStorage
 * @param {String} name
 */
export const removeStore = (name) => {
  if (!name) {
    return
  }
  window.localStorage.removeItem(name)
}

/**
 * 存储sessionStorage
 * @param { String } name
 * @param { * } content
 */
export const setSession = (name, content) => {
  if (!name) {
    return
  }
  if (typeof content === 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取sessionStorage
 * @param {String} name
 * @param {Boolean} isConversion 判断是否需要把json转成json对象
 */
export const getSession = (name, isConversion = false) => {
  if (!name) {
    return
  }
  let result = window.sessionStorage.getItem(name)
  if (isConversion) {
    result = JSON.parse(result)
  }
  return result
}

/**
 * 删除sessionStorage
 * @param {String} name
 */
export const removeSession = (name) => {
  if (!name) {
    return
  }
  window.sessionStorage.removeItem(name)
}
