// order detail
import * as React from 'react';
import {ProductInfo} from './product_info'
import {LessionInfo} from './lession_info'
import {ServiceProtocol} from './service_protocol'
import '@/scss/order/order_detail.scss';
class OrderDetail extends React.Component {
    render () {
        return (
            <div className="order_detail_wrapper">
                <section className="info_item_wrapper product_info"> 
                   <ProductInfo/>
                </section>
                <section className="info_item_wrapper">
                    <LessionInfo/>
                </section>
                <section className="info_item_wrapper">
                    <ServiceProtocol/>
                </section>
                <section className="info_item_wrapper"></section>
            </div>
        )
    }
}
export default OrderDetail