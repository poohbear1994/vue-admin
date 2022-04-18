import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 如果存在 token ，进入主页
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 每次进入非登录页都需要判断用户资料是否存在
      // 若不存在用户信息，则需要获取用户信息
      if (!store.getters.hasUserInfo) {
        // 触发获取用户信息的 action
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 如果没有token，访问的页面又在白名单中，可以进入
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
