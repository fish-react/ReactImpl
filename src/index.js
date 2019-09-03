import React from 'react';
import ReactDOM from 'react-dom';

// 这种就是全局的CSS文件
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

// 将<App>这个组件渲染到root这个元素中
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
