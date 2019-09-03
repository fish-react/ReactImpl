import React from 'react';
import './App.css';

// 引入子组件
import Header from './components/Header';
import Template from './components/Template';
import Lifecycle from './components/Lifecycle';
import Data from './components/Data';
import Props from './components/Props';
import Event from './components/Event';
import Refs from './components/Refs';

/**
 * 基本组件
 *
 * 冗余注释比单一注释要好
 */
class App extends React.Component {

  /**
   * 在render方法中写我们的模板
   * @return {*}
   */
  render () {
    return (
      <div>

        <header className="App-header">
          {/* 直接通过标签的方式使用子组件 */}

          <Header/>

          <Template/>

          <Lifecycle/>

          <Data/>

          <Props/>

          <Event/>

          <Refs/>

        </header>
      </div>
    );
  }
}

export default App;
