import { e } from './util/dom'
import { registerHook, pushState, replaceState } from '.util'

class Router {
  constructor(options) {
    this.$dom = e('#mx-app')
    this.options = options
    this.routes = options.routes
    this.beforeHooks = []
    this.afterHooks = []
  }

  push(path, params) {
    pushState(path)
  }

  replace(path, params) {
    replaceState(path)
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
