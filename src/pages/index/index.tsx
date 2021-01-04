import React, { Component } from "react";
import { View, Text, Input, Checkbox, CheckboxGroup, Image } from "@tarojs/components";
import { AtDrawer, AtSwipeAction, AtFloatLayout } from "taro-ui";
// import Taro from "@tarojs/taro";
import * as api from '../../service/api';
import Empty from './empty';

import "./index.scss";

export default class Index extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      // 是否打开抽屉
      drawerShow: false,
      // 是否弹出底部内容
      inputLayoutShow: false,
      inputIconShow: false,
      // 清单标题名称
      listTitle: "收集箱",
      // 当前任务内容
      taskInfo: "",
      // 新增任务内容数组
      taskDataArr: [],
      // 已完成任务数组
      doneTaskDataArr: [],
      // 已完成展开栏是否收起
      doneTaskSwiperPickUp: false,
      // 用户信息
      userinfo: {},
      // 今天日期
      today: 4
    };
  }

  async getGoodsInfo(goodsId) {
    const res = await api.getUserInfo({
      id: goodsId,
    });
  }
  componentWillMount() {
    // this.getGoodsInfo('2432453').then(res => {
    //   console.log('getGoodsInfo', res);
    // })
    const that = this;
    wx.getStorage({
      key: 'userInfo',
      success(res) {
          console.log('getStorage', res.data)
          if(!!res.data){
            that.setState({userinfo: res.data});
          }
      },
    });
}

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

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
    if(this.state.taskInfo !== ''){
        this.state.taskDataArr.unshift({
          value: this.state.taskInfo, 
          id: Math.random().toString(36).slice(-8),
          checked: false
        });
        this.setState({ taskInfo: "" });
    } else {
        // wx.showToast()
    }
  };

  onTapShowInput = function () {
    this.setState({inputLayoutShow: true});
  }

  handleClose = function () {
    this.setState({inputLayoutShow: false});
  }

  onChanged = function (obj){
    console.log('onChanged', JSON.stringify(obj));
    let taskDataArr = [...this.state.taskDataArr];
    let doneTaskDataArr = [...this.state.doneTaskDataArr];
    taskDataArr.map((item, index) =>{
      if(item.id === obj.id){
        doneTaskDataArr.unshift(item);
        taskDataArr.splice(index, 1);
      }
    })
    this.setState({taskDataArr});
    this.setState({doneTaskDataArr});
    // console.log('taskDataArr', JSON.stringify(this.state.taskDataArr))
    // console.log('doneTaskDataArr', JSON.stringify(this.state.doneTaskDataArr))
  }

  handleTaskDateClick = function (obj) {
    debugger
    let {id} = obj;
    let taskDataArr = [...this.state.taskDataArr];
    taskDataArr.map((item, index) => {
      if(item.id === id){
        taskDataArr.splice(index, 1);
      }
    })
    this.setState({taskDataArr});
  }

  handleDoneTaskDateClick = function (obj) {
    // const {id} = obj;
    // let doneTaskDataArr = [...this.state.doneTaskDataArr];
    // doneTaskDataArr.map((item, index) => {
    //   if(item.id === id){
    //     doneTaskDataArr.splice(index, 1);
    //   }
    // })
    // this.setState({doneTaskDataArr});
  }

  onDoneCheckChanged = function (obj) {
    let doneTaskDataArr = [...this.state.doneTaskDataArr];
    let taskDataArr = [...this.state.taskDataArr];
    doneTaskDataArr.map((item, index) =>{
      if(item.id === obj.id){
        taskDataArr.unshift(item);
        doneTaskDataArr.splice(index, 1);
      }
    })
    this.setState({doneTaskDataArr});
    this.setState({taskDataArr});
  }

  onDoneSwiper = function (obj){
    console.log('onDoneSwiperChanged', obj);
    this.setState({doneTaskSwiperPickUp: !this.state.doneTaskSwiperPickUp});
  }

  addListHandle = function (){

  }

  render(this) {
    return (
      <View className='index'>
        <Empty show={this.state.taskDataArr.length > 0 ? false :
      this.state.doneTaskDataArr.length > 0 ? false : true}></Empty>
        <View className={this.state.taskDataArr.length > 0 ? 'header' :
      this.state.doneTaskDataArr.length > 0 ? 'header' : 'header hide'}>
          <View className='draw-button' onClick={this.onTap.bind(this)}></View>
          <View className='list-title'>
            <Text>{this.state.listTitle}</Text>
          </View>
        </View>
        <View className='add-task-btn' onClick={this.onTapShowInput.bind(this)}></View>
        <AtFloatLayout isOpened={this.state.inputLayoutShow} onClose={this.handleClose.bind(this)}>
          <View className='input-group'>
            <Input
                  type='text'
                  value={this.state.taskInfo}
                  placeholder='添加任务至收集箱'
                  onBlur={this.onBlur.bind(this)}
                  onFocus={this.onFocus.bind(this)}
            />
          </View>
          <View className='icon-group'>
            <View className='calendar, icon'></View>
            <View
              className='send, icon'
              onClick={this.onSend.bind(this)}
            ></View>
          </View>
        </AtFloatLayout>
        <View className='task list-group'>
          {this.state.taskDataArr.map((item, index) => (
            <AtSwipeAction
              key={index}
              onClick={this.handleTaskDateClick}
              options={[
                {
                  text: "删除",
                  style: {
                    backgroundColor: "#EC6D72",
                  }
                },
              ]}
            >
              <View className='normal'>
                <View className='folder-line' style='background-color: #C8F2E8;'></View>
                <View className='check-box'>
                  <CheckboxGroup onChange={this.onChanged.bind(this, item)}>
                    <Checkbox value={item.id} color='#B0B0B0'></Checkbox>
                  </CheckboxGroup>
                </View>
                <View className={item.checked ? 'checked task-name' : 'task-name'}>{item.value}</View>
              </View>
            </AtSwipeAction>
          ))}
        </View>
        <View className='done-task list-group'>
          <View 
          className={this.state.doneTaskDataArr.length > 0 ? 
          'show list-swiper' : 'hide list-swiper'}
          >
            <View>已完成</View>
            <View className='swiper-count'>{this.state.doneTaskDataArr.length}</View>
            <View 
              className={this.state.doneTaskSwiperPickUp ? 'pick-up swiper-icon'  : 'swiper-icon' }
              onClick={this.onDoneSwiper.bind(this)}>
              </View>
          </View>
          {this.state.doneTaskDataArr.map((item, index) => (
            <AtSwipeAction 
              key={index}
              onClick={this.handleDoneTaskDateClick(item)}
              options={[
                {
                  text: "删除",
                  style: {
                    backgroundColor: "#EC6D72",
                  },
                },
              ]}
            >
              <View className='normal'>
                <View className='folder-line' style='background-color: #C8F2E8;'></View>
                <View className='check-box'>
                  <CheckboxGroup onChange={this.onDoneCheckChanged.bind(this, item)}>
                    <Checkbox value={item.id} color='#B0B0B0' checked></Checkbox>
                  </CheckboxGroup>
                </View>
                <View className={item.checked ? 'checked task-name' : 'task-name'}>{item.value}</View>
              </View>
            </AtSwipeAction>
          ))}    
        </View>
        <AtDrawer
          show={this.state.drawerShow}
          mask
          onClose={this.onClose.bind(this)}
        >
          <View className='draw-container'>
            <View className='user-info'>
              <Image className='acatar' src={this.state.userinfo.avatarUrl}></Image>
              <View className='name'>{this.state.userinfo.nickName}</View>
            </View>
            <View className='today add-list-title'>
              <View className='add-list-icon'></View>
              <View className='today-date'>{this.state.today}</View>
              <View className='add-list-text'>今天</View>
            </View>
            <View className='add-list-title' onClick={this.addListHandle.bind(this)}>
              <View className='add-list-icon'></View>
              <View className='add-list-text'>添加清单</View>
            </View>
          </View>
        </AtDrawer>
      </View>
    );
  }
}
