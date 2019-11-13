const router = [
  {
    path: '/',
    views: () => import('@/views/index')
  },
]

let sethtml = async (item) => {
  let app = document.querySelector('#mx-app')
  let t = item.views
  log(item.views instanceof Function)
  if (item.views instanceof Function) {
    let res = await item.views()
    t = res.default
  }
  app.innerHTML = t

}

var __main = () => {
  let pathname = window.location.pathname
  for (const item of router) {
    if (item.path == pathname) {
      sethtml(item)
    }
  }
}

__main()
