import * as React from 'react';
import '@/scss/payment/payment_sub_component.scss'
export function PayButtonComponent () {
    return (
        <div className="pay_button_wrapper">
            <span className="count_number">共2件</span>
            <p className="total_cash"> 
                <span className="text_des" >合计：</span>
                <span className="cash_count">￥99999.00</span>
            </p>
            <button className="pay_btn">支付</button>
        </div>
    )
}

export function FullButton () { // 立即支付 ， 同意
    return (
        <div className="pay_full_button_wrapper">
            <button className="pay_but">
                立即支付
            </button>
        </div>
    )
}

export function MoneyShouldPay () {
    return (
        <div className="monry_pay_wrapper">
            <p className="should_pay">应付金额</p>
            <span>￥3180.00</span>
        </div>
    )
}

export function PayWay () {
    return (
        <ul className="pay_way_wrapper">
            <li className="pay_detail">
                <div>
                    <img />
                    <p className="way_des_wrapper">
                        <span>微信支付</span>
                        <span>建议使用微信5.0以上的版本</span>
                    </p>
                </div>
                <span></span>
            </li>
        </ul>
    )
}