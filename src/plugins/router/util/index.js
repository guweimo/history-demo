export const registerHook = (list, fn) => {
  list.push(fn)
  return () => {
    const i = list.indexOf(fn)
    if (i > -1) {
      list.splice(i, 1)
    }
  }
}

export const getLocation = (base) => {
  let path = decodeURI(window.location.pathname)
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length)
  }
  return (path || '/') + window.location.search + window.location.hash
}

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
