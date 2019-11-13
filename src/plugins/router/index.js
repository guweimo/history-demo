import { e } from './util/dom'
import { registerHook } from '.util'

class Router {
  constructor(options) {
    this.$dom = e('#mx-app')
    this.options = options
    this.beforeHooks = []
    this.afterHooks = []
  }

  push(path, params) {
    if (!path) {
      console.error('path not found')
      return false
    }

    window.history.pushState(null, '', path)
  }

  replace(path, params) {
    if (!path) {
      console.error('path not found')
      return false
    }
    window.history.replaceState(null, '', path)
  }

  go(number) {
    window.history.go(number)
  }

  back() {
    this.go(-1)
  }

  forward() {
    this.go(1)
  }

  // beforeEach(fn) {
  //   return registerHook(this.beforeHooks, fn)
  // }
}

export default Router
