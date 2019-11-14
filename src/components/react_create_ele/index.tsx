import * as React from 'react';
import  * as style from './index.scss';
import { emitter } from '@/utils/create_event';

export class CreateEle extends React.Component {
  private eventEmitter:any = '';
  state = {
    message: ''
  }
  createMsg () {
    this.eventEmitter = emitter.on('changeMessage', (message) => {
      this.setState({
        message,
      });
    });
  };
  
  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter, () => {});
  };

  componentDidMount () {
    this.createMsg();
  };

  render () {
    return (
      <div>
        {
          React.createElement(
            'div', 
            {id: 'one', className: style.two },
            React.createElement('span', { id: 'spanOne'}, '这是react_create_ele测试代码第一个span 标签'),
            React.createElement('span', { id: 'spanTwo'}, '这是react_create_ele测试代码第二个span 标签'),
            React.createElement('p', { id: 'pOne'}, this.state.message),
          )
        }
      </div>
    )
  }
}