export const registerHook = (list, fn) => {
  list.push(fn)
  return () => {
    const i = list.indexOf(fn)
    if (i > -1) {
      list.splice(i, 1)
    }
  }
}

export function getLocation (base) {
  let path = decodeURI(window.location.pathname)
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length)
  }
  return (path || '/') + window.location.search + window.location.hash
}
