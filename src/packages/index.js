/*
 * @describe: 主入口
 * @Author: superDragon
 * @Date: 2019-10-09 23:21:11
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-10 19:09:57
 */
import HkButton from './hk-button'
import HKcard from './hk-card'

const install = Vue => {
  Vue.component(HkButton.name, HkButton)
  Vue.component(HKcard.name, HKcard)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  HkButton,
  HKcard
}

export default { install }
