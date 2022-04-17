import SvgIcon from '../components/SvgIcon.vue'

// 批量引入项目内的.svg文件
const svgRequire = require.context('./svg', false, /.svg$/)
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

// 全局注册 SvgIcon 组件
export default app => {
  app.component('svg-icon', SvgIcon)
}
