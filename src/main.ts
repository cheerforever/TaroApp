import * as api from './service/api';

export function init() {
    wx.login({
        success(res) {
            console.log('login', res);
            if (res.code) {
                wx.getSetting({
                    success (res){
                        wx.clearStorage();
                        if (res.authSetting['scope.userInfo']) {
                        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                            wx.getUserInfo({
                                success: function(res) {
                                    console.log(res.userInfo)
                                    wx.setStorage({key: 'userInfo', data:res.userInfo});
                                }
                            });
                        } else {
                            wx.authorize({
                                scope: 'scope.userInfo',
                                success () {
                                    console.log('authorize')
                                  // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                                    // wx.startRecord()
                                }
                            })
                        }
                    }
                })
                //发起网络请求
                // api.getUserInfo({code: res.code})
            } else {
                console.log('登录失败！' + res.errMsg)
            }
        }
    })
}