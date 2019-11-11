import { e } from '../utils/dom'

class Router {
  constructor() {
    this.$dom = e('#mx-app')
    this.history = window.history
  }

  push(path, params) {
    if (!path) {
      console.error('path not found')
      return false
    }

    this.history.pushState(path)
  }

  redirect(path, params) {
    if (!path) {
      console.error('path not found')
      return false
    }
    this.history.replaceState(path)
  }
}

export default Router
