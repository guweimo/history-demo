import { e } from './util/dom'
import { pushState, replaceState, changeView } from './util/push-state'
import { redoLinkClickEvent } from './util/link'

class Router {
  constructor(options) {
    this.$dom = e('#mx-app')
    this.options = options
    this.routes = options.routes
    this.beforeHooks = []
    this.afterHooks = []
    this.__init()
  }

  __init() {
    var pathname = window.location.pathname
    changeView(this.$dom, this.routes, pathname)

    redoLinkClickEvent(this)
  }

  push(path, params) {
    pushState(path)
    changeView(this.$dom, this.routes, path)
  }

  replace(path, params) {
    replaceState(path)
    changeView(this.$dom, this.routes, path)
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
