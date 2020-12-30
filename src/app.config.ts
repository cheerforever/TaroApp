/*
 * @Author: your name
 * @Date: 2020-12-29 13:58:20
 * @LastEditTime: 2020-12-30 11:55:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \TaroApp\src\app.config.ts
 */
export default {
  pages: [
    'pages/index/index',
    'pages/calendar/index',
    'pages/clockin/index',
    'pages/my/index'
  ],
  tabBar: {
    // "selectedColor": "#4B73EB",
    // "backgroundColor": "#FFF",
    // "borderStyle": "black",
    "list": [
        {
          "iconPath": "assets/images/checkmark.png",
          "selectedIconPath": "assets/images/checkmark.png",
          "pagePath": "pages/index/index",
          "text": "待办"
        },
        {
          "iconPath": "assets/images/check.png",
          "selectedIconPath": "assets/images/check.png",
          "pagePath": "pages/calendar/index",
          "text": "日历"
        },
        {
          "iconPath": "assets/images/edit.png",
          "selectedIconPath": "assets/images/edit.png",
          "pagePath": "pages/clockin/index",
          "text": "打卡"
        },
        {
          "iconPath": "assets/images/cogwheel.png",
          "selectedIconPath": "assets/images/cogwheel.png",
          "pagePath": "pages/my/index",
          "text": "设置"
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
