/*
 * @describe: 配置文件
 * @Author: superDragon
 * @Date: 2019-10-09 23:25:49
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-10 18:49:25
 */
let component = [
  'hk-button',
  'hk-card'
]
module.exports = {
  base: '/hekr-ui/',
  title: 'hekr-ui',
  description: 'hekr-ui',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '组件',
        link: '/component/hk-button'
      }
    ],
    sidebar: {
      '/component/': component
    },
    lastUpdated: '最后更新',
    repo: '',
    repoLabel: 'GitLab'
  },
  plugins: [],
  serviceWorker: true
}
