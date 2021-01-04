import React, { Component } from "react";
import { View } from "@tarojs/components";
import "./empty.scss";

export default class empty extends Component{
    constructor(props){
        super(props);
    }
    render(this){
        return (
            <View className={this.props.show ? 'empty' : 'empty hide'}>
                <View className='empty-icon'></View>
                <View className='empty-title'>
                    没有任务，放松一下
                </View>
                <View className='empty-title-small'>想记点什么？点击 + 按钮记下来</View>
            </View>
        )
    }
}