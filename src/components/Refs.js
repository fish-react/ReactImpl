import React from 'react';

/**
 * 通过Refs直接获得HTML节点
 *
 * MVVM让我们不必直接操作DOM，但是有的时候还是需要HTML节点的，
 * 为了模块化，原来的document.getElementById等不合适，
 * 于是就有了Refs
 */
class Refs extends React.Component {

  alertInput(){
    // 通过this.refs.XX获得某个ref
    // 这种写法很简单，但是失去了类型信息
    alert(this.refs.inputBtn.value);
  }

  render () {
    return (
      <div>
        {/* 相当于原来的id的升级版 */}
        <input ref='inputBtn'/>

        <button onClick={this.alertInput.bind(this)}>Alert当前输入框的值</button>
      </div>
    );
  }
}

/**
 * 导出当前的类，供其他组件调用
 */
export default Refs;
