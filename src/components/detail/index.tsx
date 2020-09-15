import * as React from 'react';
import { emitter } from '@/utils/create_event';
import * as styles from './index.scss';
interface initProps {};
interface initState {};
export class Detail extends React.Component<initProps, initState> {
  constructor(props:initProps) {
    super(props);
  };

  getComponent2 = async() => {
    const module = await import(/* webpackChunkName:"createElement" */ '@/utils/index');
    module.createElement().then((component:any) => {
      document.body.appendChild(component);
    });
  };

  emitMsg() {
    emitter.emit('changeMessage', '改变msg');
  };

  render() {
    return (
      <div className={styles.wrapper}>
      this is detail page
        <p onClick={this.getComponent2}>create HTML</p>
        <button
            className={styles.btn}
            onClick={this.emitMsg.bind(this)}>点击改变msg
        </button>
      </div>
    );
  }
}
