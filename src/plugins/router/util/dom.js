/**
 * @author guweimo
 * @version v0.0.1
 */

export const e = function(selector) {
  return document.querySelector(selector)
}

export const es = function(selector) {
  return document.querySelectorAll(selector)
}

// 绑定事件
export const bindEvent = function(element, eventName, callback) {
  element.addEventListener(eventName, callback)
}

export const appendHtml = function(element, html) {
  element.insertAdjacentHtml('beforeend', html)
}

export const find = function(element, selector) {
  return element.querySelector(selector)
}

export const findAll = function(element, selector) {
  return element.querySelectorAll(selector)
}
