

import * as React from 'react';
import '@/scss/order/index.scss'
import NoOrder from './no_order'
import OrderDetail from './order_detail'
class Order extends React.Component {
  render() {
    return (
     <div className="order_wrapper">
       {/* <NoOrder/> */}
       <OrderDetail/>
     </div>
    );
  }
}

export default Order
