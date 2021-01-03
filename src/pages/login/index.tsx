import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    getStorageUserInfo (){
        const that = this;
        wx.getStorage({
            key: 'userInfo',
            success(res) {
                console.log('getStorage', res.data)
                if(!!res.data){
                    wx.switchTab({
                        url: '/pages/index/index'
                    })
                } else {
                    that.setState({ loading: false });
                }
            },
            fail(){
                that.setState({ loading: false });
            }
        });
    }

    componentWillMount() { 
        this.getStorageUserInfo();
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { 
        // !this.getStorageUserInfo.bind(this)();
    }

    componentDidHide() { }

    onTap = function () {
        wx.getUserInfo({
            success: function (res) {
                console.log(res.userInfo)
                if (!!res.userInfo) {
                    wx.setStorage({key: 'userInfo', data:res.userInfo});
                    wx.switchTab({
                        url: '/pages/index/index'
                    })
                }
            }
        });
    }

    render(this) {
        return (
            <View className='login'>
                <AtActivityIndicator mode='center' content='loading...' className={this.state.loading ? 'show' : 'hide'}></AtActivityIndicator>
                <View className={this.state.loading ? 'hide' : 'show'}>
                    <View className='container'>
                        <View className='icon'></View>
                        <View className='icon-text'>摩卡清单</View>
                    </View>
                    <View className='footer'>
                        {/* <button className='login-btn'></button> */}
                        <button className='login-btn' open-type="getUserInfo" onClick={this.onTap.bind(this)}></button>
                    </View>
                </View>
            </View>
        )
    }
}
