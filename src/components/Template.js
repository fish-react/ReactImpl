import React from 'react';

/**
 * React JSX的模板语法
 */
class Template extends React.Component {

  /**
   * 在render方法中写我们的模板
   * @return {*}
   */
  render () {
    // 变量的值也可以是HTML模板
    let ele = <div>这是一个HTML模板变量</div>;

    // HTML字符串
    let html = '<div>这是HTML字符串</div>';

    return (
      // 必须有且只有一个根标签
      <div>
        <h3>这是JSX用法测试</h3>

        <div>
          {/* 三元表达式的使用 */}
          345351 {345351 % 11 === 0 ? '能' : '不能'} 被 11 整除
        </div>

        <div>
          {/* 直接使用HTML模板变量，会被渲染成页面元素 */}
          {ele}

          {/* 普通的字符串 */}
          {html}
        </div>

        <div>
          {/* 直接将字符串渲染成HTML，不过存在安全隐患 */}
          <div dangerouslySetInnerHTML={{__html: html}}/>
        </div>
      </div>
    );
  }
}

/**
 * 导出当前的类，供其他组件调用
 */
export default Template;
