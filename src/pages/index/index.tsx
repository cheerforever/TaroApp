import React, { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import { AtDrawer } from "taro-ui";
import "./index.scss";
import { chooseInvoiceTitle } from "@tarojs/taro";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        drawerShow: false,
        inputIconShow: false,
		listData: {
			listTitle: '📪收集箱'
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

  onBlur = function (obj) {
    const { value } = obj.detail;
    if(value === ''){
        this.setState({ inputIconShow: false });
    }
  };
  onFocus = function () {
    this.setState({ inputIconShow: true });
  };

  render(this) {
    return (
      <View className='index'>
        <View className='header'>
            <View className='draw-button' onClick={this.onTap.bind(this)}></View>
            <View className='list-title'>
                <Text>{this.state.listData.listTitle}</Text>
            </View>
        </View>
        <View className='task-group'>
            <View className='input-group'>
                <Input type='text' placeholder='添加任务至收集箱' onBlur={this.onBlur.bind(this)} onFocus={this.onFocus.bind(this)} />
                <View className='icon-group' style={this.state.inputIconShow ? '' : 'display:none;'}>
                    <View className='calendar, icon'></View>
                    <View className='send, icon'></View>
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
