// 不是本订单手机号
import * as React from 'react';
import '@/scss/order/no_order.scss'
class NoOrder extends React.Component {
  render() {
    return (
     <div className="no_order_wrapper">
       <div className="img_wrapper">
         这里差一张图片
       </div>
       <p className="text_des">
        你还没有课程订单需要支付哦~
       </p>
     </div>
    );
  }
}

export default NoOrder
