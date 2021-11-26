/**
 * vuepress 配置文件
 */

const autoGenSidebar = require('./autoSiderbar/DiffRouteDifSidebar')
const sidebar = autoGenSidebar();

module.exports = {
  lang: 'zh-CN',
  title: '静默的Vlog',
  description: '静默的Vuepress Blog',
  head: [['link', { rel: 'icon', href: '/images/favicon-32x32.png' }]], // icon设置

  themeConfig: {
    logo: '/images/logo.png',
    lastUpdated: false,   // 禁用显示更新时间
    contributors: false,   // 禁用显示贡献者
    sidebar:{
      "/vuepress/":[
          {
              "text":"Vuepress博客搭建",
              "children":[
                  {
                      "text":"01 搭建vuepress2",
                      "link":"/vuepress/01 搭建vuepress2.md"
                  },
                  {
                      "text":"02 图片存放路径",
                      "link":"/vuepress/02 图片存放路径.md"
                  },
                  {
                      "text":"03 侧边栏配置",
                      "link":"/vuepress/03 侧边栏配置.md"
                  }
              ]
          }
      ],
      "/": [
        {
          "text": "Vuepress博客搭建",
          "link": "/vuepress/"
        }
      ]
    }
  },
}