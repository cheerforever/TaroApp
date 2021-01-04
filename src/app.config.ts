/*
 * @Author: your name
 * @Date: 2020-12-29 13:58:20
 * @LastEditTime: 2021-01-04 17:37:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \TaroApp\src\app.config.ts
 */
export default {
  pages: [
    'pages/login/index',
    'pages/index/index',
    'pages/calendar/index',
    'pages/clockin/index',
    'pages/my/index'
  ],
  tabBar: {
    "selectedColor": "#25a085",
    // "backgroundColor": "#FFF",
    // "borderStyle": "black",
    "list": [
        {
          "iconPath": "assets/images/plan/lineal/Outline-06.png",
          "selectedIconPath": "assets/images/plan/lineal-color/Color-06.png",
          "pagePath": "pages/index/index",
          "text": "待办"
        },
        {
          "iconPath": "assets/images/plan/lineal/Outline-28.png",
          "selectedIconPath": "assets/images/plan/lineal-color/Color-28.png",
          "pagePath": "pages/calendar/index",
          "text": "日历"
        },
        {
          "iconPath": "assets/images/plan/lineal/Outline-46.png",
          "selectedIconPath": "assets/images/plan/lineal-color/Color-46.png",
          "pagePath": "pages/clockin/index",
          "text": "打卡"
        },
        {
          "iconPath": "assets/images/plan/lineal/Outline-50.png",
          "selectedIconPath": "assets/images/plan/lineal-color/Color-50.png",
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
