import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getUserInfo = function (obj){
    console.log(obj);
  }

  render () {
    return (
      <View className='index'>
        <Text>设置</Text>
        <button open-type="getUserInfo">授权登录</button>
      </View>
    )
  }
}
