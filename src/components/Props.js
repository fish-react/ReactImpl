import React from 'react';
import PropsChild from './PropsChild';

class Props extends React.Component {

  render () {
    return (
      <div>
        <h3>这是Props</h3>

        {/* 向子组件传递数据 */}
        <PropsChild user_info={{name: 'Jon', age: 18}}/>
      </div>
    );
  }
}

export default Props;
