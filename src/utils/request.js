import axios from 'axios'
import store from '@/store'
import {
  ElMessage
} from 'element-plus'
import {
  isCheckTimeout
} from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加 icode
    config.headers.icode = '5FD82D1BDB03DBD2'
    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      // 每次发起请求，查看token是否已经过期
      if (isCheckTimeout()) {
        // 如果已经过期，执行登出
        store.dispatch('user/logout')
        // 这里抛出的错误，会在响应拦截器的错误捕捉中捕捉到
        return Promise.reject(new Error('token 失效'))
      }
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    // 必须返回 config
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const {
      success,
      message,
      data
    } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  error => {
    // 如果被顶号，主动退出登陆
    if (
      error.response &&
      error.response.data &&
      // 这里的状态码对应到被顶号，如果被顶号
      error.response.data.code === 401
    ) {
      // 退出登录
      store.dispatch('user/logout')
    }
    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)

export default service
