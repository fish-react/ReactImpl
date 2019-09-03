import React from 'react';

/**
 * 数据层
 */
class Data extends React.Component {

  /**
   * 通过 this.state 存储数据，这是组件自身的数据
   * 通过 this.setState 更新数据
   * 响应式系统自动刷新view层样式
   */
  constructor () {
    super();
    this.state = {
      users: ['Jon', 'Jack'],
      time: new Date()
    }
  }

  /**
   * 在render方法中写我们的模板
   * @return {*}
   */
  render () {

    // 每隔 1s，更新下时间
    setTimeout(() => {
      this.setState({
        time: new Date()
      })
    }, 1000)

    return (
      <div>

        {/* 列表渲染 */}
        {this.state.users.map(user => {
          return (
            <p>{user}</p>
            )
        })}

        <p>
          {/* 实时更新的时间 */}
          时间： {this.state.time.toString()}
        </p>
      </div>
    );
  }
}

/**
 * 导出当前的类，供其他组件调用
 */
export default Data;
