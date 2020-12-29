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
          "iconPath": "assets/images/checkmark.png",
          "selectedIconPath": "assets/images/checkmark.png",
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
