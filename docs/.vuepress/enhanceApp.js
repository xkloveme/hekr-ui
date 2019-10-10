/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-10-09 23:31:39
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-09 23:31:39
 */
import Element from 'element-ui'
import Packages from './../../src/packages'
import './public/style/index.scss'

export default ({ Vue }) => {
  Vue.use(Element)
  Vue.use(Packages)
}
