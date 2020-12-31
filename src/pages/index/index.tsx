import React, { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import { AtDrawer, AtSwipeAction } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  drawerShow: false,
	  inputIconShow: false,
	  listTitle: "📪收集箱",
	  taskInfo: "",
	  taskDataArr: [{value: '一条任务'}]
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
	this.setState({ taskInfo: value });
	if (value === "") {
	  this.setState({ inputIconShow: false });
	}
  };

  onFocus = function () {
	this.setState({ inputIconShow: true });
  };

  onSend = function (obj) {
	console.log("onSend", obj, this.state.taskInfo);
	this.setState({ taskInfo: "" });
  };

  render(this) {
	return (
	  <View className='index'>
		<View className='header'>
		  <View className='draw-button' onClick={this.onTap.bind(this)}></View>
		  <View className='list-title'>
			<Text>{this.state.listTitle}</Text>
		  </View>
		</View>
		<View className='task-group'>
		  <View className='input-group'>
			<Input
  type='text'
  value={this.state.taskInfo}
  placeholder='添加任务至收集箱'
  onBlur={this.onBlur.bind(this)}
  onFocus={this.onFocus.bind(this)}
			/>
			<View
  className='icon-group'
  style={this.state.inputIconShow ? "" : "display:none;"}
			>
			  <View className='calendar, icon'></View>
			  <View
  className='send, icon'
  onClick={this.onSend.bind(this)}
			  ></View>
			</View>
		  </View>
		</View>
		<View className='task-list-group'>
		  {this.state.taskDataArr.map((item, index) => (
			<AtSwipeAction
  key={index}
  options={[
				{
				  text: "取消",
				  style: {
					backgroundColor: "#6190E8",
				  },
				},
				{
				  text: "确认",
				  style: {
					backgroundColor: "#FF4949",
				  },
				},
			  ]}
			>
				<View className='normal'>
					<View className='folder-line'></View>
					<View className='check-box'></View>
					<View>{item.value}</View>
				</View>
			</AtSwipeAction>
		  ))}
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
