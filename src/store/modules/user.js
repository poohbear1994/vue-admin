/*eslint-disable*/
import {
  login,
  getUserInfo
} from '@/api/sys'
import md5 from 'md5'
import {
  setItem,
  getItem,
  removeAllItem
} from '@/utils/storage'
import {
  TOKEN
} from '@/constant'
import router, {
  resetRouter
} from '@/router'
import {
  setTimeStamp
} from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo) {
      const {
        username,
        password
      } = userInfo
      // 当需要外界进行处理时，返回一个promise
      return new Promise((resolve, reject) => {
        login({
            username,
            password: md5(password)
          })
          .then(data => {
            this.commit('user/setToken', data.token)
            // 用缓存记录下token保存的时间
            setTimeStamp()
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    logout() {
      // 重置路由表
      resetRouter()
      // 清除vuex缓存，初始化用户信息与token
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      // 清除loacalhost缓存
      removeAllItem()
      // 跳转到登录页
      router.push('/login')
    }
  }
}
