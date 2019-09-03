import React from 'react';

/**
 * 其实这就是组件数据传递的一个弊端
 *
 * - 子组件想要什么类型的数据都已经确定了
 * - 但是传递什么确实由父组件决定的
 * - 没有很好的办法做代码检查，只能在运行期间测试
 *
 * 通过this.props接受父组件的数据
 */
class PropsChild extends React.Component {

  render () {
    return (
      <div>
        <p>{this.props.user_info.name}</p>
      </div>
    );
  }
}

export default PropsChild;
