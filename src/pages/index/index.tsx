import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { AtDrawer } from 'taro-ui'
import './index.scss'

export default class Index extends Component{
constructor(props) {
	super(props);
	this.state = {show: false};
	}
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onClose = function () {};
  onTap = function () {
	this.setState({show: true});
  };

  render() {
    return (
      <View className='index'>
		<View className='header'>
			<View className='draw-button' onClick={this.onTap.bind(this)}></View>
		</View>
        <AtDrawer
          show={this.state.show}
          mask
          onClose={this.onClose.bind(this)}
          items={["菜单1", "菜单2"]}
        ></AtDrawer>
      </View>
    );
  }
}
