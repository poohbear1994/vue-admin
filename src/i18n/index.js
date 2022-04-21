import {
  createI18n
} from 'vue-i18n'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'
const messages = {
  en: {
    el: enLocale.el,
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    el: zhLocale.el,
    msg: {
      ...mZhLocale
    }
  }
}

const locale = 'en'

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
