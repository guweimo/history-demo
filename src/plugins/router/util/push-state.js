
export const pushState = (url, replace=false) => {
  if (!url) {
    console.error('path not found')
    return false
  }
  let history = window.history
  let state = 'pushState'
  if (replace) {
    state = 'replaceState'
  }

  history[state]({}, '', url)
}

export const replaceState = (url) => {
  pushState(url, true)
}

const replaceView = async (app, view) => {
  let t = view
  if (view instanceof Function) {
    let res = await view()
    t = res.default
  }

  app.innerHTML = t
}

export const changeView = (app, routes, url) => {
  for (let item of routes) {
    if (item.path == url) {
      replaceView(app, item.views)
    }
  }
}
