import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加 icode
    config.headers.icode = '5FD82D1BDB03DBD2'
    // 必须返回 config
    return config
  }
)

export default service
