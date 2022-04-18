import {
  login
} from '@/api/sys'
import md5 from 'md5'
export default {
  // 独立模块
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login(context, userInfo) {
      const {
        username,
        password
      } = userInfo
      /*eslint-disable */
      return new Promise((resolve, reject) => {
        login({
            username,
            password: md5(password)
          })
          .then(data => {
            this.commit('user/setToken', data.token)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
