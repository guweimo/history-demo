import Router from '../plugins/router'

const routes = [
  {
    path: '/',
    views: () => import('@/views/index')
  },
  {
    path: '/404',
    views: () => import('@/views/404')
  },
]

export default new Router({
  routes,
})
