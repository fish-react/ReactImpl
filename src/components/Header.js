import React from 'react';

/**
 * 一个木偶组件，仅仅暂时基本信息，供其他组件调用
 * 组件名无关紧要
 */
class Header extends React.Component {

  /**
   * 在render方法中写我们的模板
   * @return {*}
   */
  render () {
    return (
      // 必须有且只有一个根标签
      <div>
        {/* 这是一个注释 */}
        Hello, This is an element from Header.js
      </div>
    );
  }
}

/**
 * 导出当前的类，供其他组件调用
 */
export default Header;
