import * as React from 'react';
import  * as style from './index.scss';
export class CreateEle extends React.Component {
  render () {
    return (
      <div>
        {
          React.createElement(
            'div', 
            {id: 'one', className: style.two },
            React.createElement('span', { id: 'spanOne'}, '只是测试代码第一个span 标签'),
            React.createElement('span', { id: 'spanTwo'}, '只是测试代码第二个span 标签'),
          )
        }
      </div>
    )
  }
}