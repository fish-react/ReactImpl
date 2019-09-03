import React from 'react';

/**
 * 生命周期函数
 */
class Lifecycle extends React.Component {

  componentWillMount(){
    console.log('componentWillMount执行了');
  }

  componentDidMount(){
    console.log('componentDidMount执行了');
  }

  /**
   * 在render方法中写我们的模板
   * @return {*}
   */
  render () {
    return (
      <div>
        生命周期函数测试
      </div>
    );
  }
}

/**
 * 导出当前的类，供其他组件调用
 */
export default Lifecycle;
