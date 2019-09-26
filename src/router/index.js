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
  }

  redirect(path, params) {
    if (!path) {
      console.error('path not found')
      return false
    }
  }
}

export default new Router()
