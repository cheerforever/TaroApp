/*
 * @Author: your name
 * @Date: 2020-12-29 13:58:20
 * @LastEditTime: 2020-12-29 14:53:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myApp\src\app.config.ts
 */
export default {
  pages: [
    'pages/index/index',
    'pages/home/index'
  ],
  tabBar: {
    "selectedColor": "#4B73EB",
    "backgroundColor": "#FFF",
    "borderStyle": "black",
    "list": [
        {
          "pagePath": "pages/index/index",
          "text": "首页"
        },
        {
          "pagePath": "pages/home/index",
          "text": "个人"
        }
      ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
