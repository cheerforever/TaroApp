import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtDrawer } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
		drawerShow: false,
		listData: {
			listTitle: '🏋滑稽剧团'
		}
	};
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onClose = function () {
	this.setState({ drawerShow: false });
  };

  onTap = function () {
    this.setState({ drawerShow: true });
  };

  render(this) {
    return (
      <View className='index'>
		<View className={this.state.drawerShow ? 'draw-show' : ''}>
			<View className='header'>
			<View className='draw-button' onClick={this.onTap.bind(this)}></View>
			<View className='list-title'>
				<Text>{this.state.listData.listTitle}</Text>
			</View>
			</View>
		</View>
        <AtDrawer
          show={this.state.drawerShow}
          mask
          onClose={this.onClose.bind(this)}
          items={["菜单1", "菜单2"]}
        ></AtDrawer>
      </View>
    );
  }
}
