import * as React from 'react';
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';
interface initProps {}
interface initState {}

const MobxState:any = observable({
  count: 0,
  price: 100,
})

MobxState.handleInc = function () {
  this.count++;
}

MobxState.handleDec = function () {
  this.count--;
}

@observer class MobxUse extends React.Component<initProps, initState> {
  // @observable count = 0;

  constructor(props:initProps) {
    super(props);
  }

  render() {
    return (
      <>
        COUNTER：{MobxState.count}
        PRICE：{MobxState.price}
        total: {MobxState.totalMoney}
        <button  onClick={MobxState.handleInc}>+</button>
        <button  onClick={MobxState.handleDec}>-</button>
      </>
    )
  }

  handleInc = () => {
    // this.count++;
  }
  handleDec = () => {
    // this.count--;
  }
}

export default MobxUse;