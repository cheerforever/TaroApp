/*
 * @Author: your name
 * @Date: 2020-12-29 13:58:20
 * @LastEditTime: 2020-12-30 12:10:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \TaroApp\src\app.ts
 */
import { Component } from 'react'
import 'taro-ui/dist/style/index.scss'
import './app.scss'
import * as main from './main';

class App extends Component {

  componentDidMount () {
    main.init();
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
	return this.props.children
  }
}

export default App
