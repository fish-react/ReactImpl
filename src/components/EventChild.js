import React from 'react';

/**
 * 函数也可以看做是一种数据，从父组件中传递给子组件
 * 然后子组件在事件循环中调用它
 */
class EventChild extends React.Component {
  render () {

    return (
      <div>
        <h4>EventChild</h4>

        <p>计数: {this.props.count}</p>

        {/* 子组件直接使用父组件传递进来的函数 */}
        <button onClick={this.props.plus1}>+1</button>
      </div>
    );
  }
}

/**
 * 导出当前的类，供其他组件调用
 */
export default EventChild;
