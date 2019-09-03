import React from 'react';

import EventChild from './EventChild';

/**
 * 事件绑定
 */
class Event extends React.Component {

  constructor () {
    super();
    this.state = {
      count: 0
    }
  }

  /**
   * 自定义函数
   */
  plus1(){
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {

    return (
      <div>
        <p>计数: {this.state.count}</p>

        {/* 绑定事件，注意需要bind this */}
        <button onClick={this.plus1.bind(this)}>+1</button>

        {/* 把函数也传递给子组件 */}
        <EventChild plus1={this.plus1.bind(this)} count={this.state.count}/>
      </div>
    );
  }
}

/**
 * 导出当前的类，供其他组件调用
 */
export default Event;
