import * as React from 'react';
import { observable, autorun,  computed, when, reaction, configure, action} from 'mobx';
import { observer } from 'mobx-react';
import  * as style from './index.scss';
configure({ enforceActions: true });
interface initProps {}
interface initState {}

const MobxState:any = observable({
  count: 0,
  price: 100,
  total: 0,
})

action
MobxState.handleInc = function () {
  MobxState.count++;
}

action
MobxState.handleDec = function () {
  MobxState.count--;
}

reaction(() => MobxState.count, (data, reaction) => {
  console.log('reaction中的data' + data) 
  if (data === 10) {
    reaction.dispose();
  }
})

@observer class MobxUse extends React.Component<initProps, initState> {
  @observable age = 0;

  constructor(props:initProps) {
    super(props);
    when( // 第一个函数是一个条件值，返回true就会执行第二个函数（然后就会被清除，意味着只能执行一次）
      () => MobxState.count === 5,
      () => this.getAlertMsg(),
    );
    autorun(() => {
      MobxState.total = MobxState.count * MobxState.price;
      console.log('autorun执行了');
    })
  }

  @computed get total() {
    return MobxState.price * MobxState.count
  }

  getAlertMsg() {
    alert('alert msg');
  }

  render() {
    return (
      <>
        <p className={style.p}>COUNTER：{MobxState.count}</p>
        <p className={style.p}>PRICE：{MobxState.price}</p>
        <p className={style.p}>total: {this.total}</p>
        <p className={style.p}>MobxState total: {MobxState.total}</p>
        <p className={style.p}>age: {this.age}</p>
        <button className={style.btn} onClick={MobxState.handleInc}>+</button>
        <button className={style.btn} onClick={MobxState.handleDec}>-</button>
        <button className={style.btn} onClick={this.handleDec}>组件自己的-</button>
        <button className={style.btn} onClick={this.changeAge}>changeAge++</button>
      </>
    )
  }

  @action
  changeAge = () => {
    this.age++;
  }

  @action
  handleDec = () => {
    MobxState.count--;
  }
}

export default MobxUse;