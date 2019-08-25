// order detail
import * as React from 'react';
import {OrderInfo} from '@/components/order/order_info';
import {ProductInfo} from '@/components/order/product_info'
import {PayButtonComponent} from './sub_components'
// import '@/scss/order/order_detail.scss';
import '@/scss/payment/index.scss'
class PaymentInfo extends React.Component {
    render () {
        return (
            <div className="payment_wrapper">
                {/* order info */}
                <div className="order_detail_wrapper">
                    <section className="info_item_wrapper product_info"> 
                    <ProductInfo/>
                    </section>
                    <section className="info_item_wrapper">
                        <OrderInfo/>         
                    </section>
                </div>
                {/* payment btn */}
                <div  className="pay_button_container">
                    <PayButtonComponent/>
                </div>
            </div>
          
        )
    }
}
export default PaymentInfo