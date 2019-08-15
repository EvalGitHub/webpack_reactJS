// 商品信息
import * as React from 'react';
export  function  ProductInfo () {
    return (
        <div className="product_info_wrapper">
            <p className="top_nav">
                <span className="nav_top_title">商品信息</span>
                <span className="order_status finished">已完成</span>
            </p>
            <div className="product_name_wrapper">
                <span className="name">商品名称超过十五个字则换行显示超过十五个字</span>
                <p className="money">
                    <span className="total_cash">¥6080.00</span>
                    <span className="count">x2</span>
                </p>
            </div>
            <ul className="nav_wrapper">
                <li className="nav_item">
                    <span className="nav_title">优惠</span>
                    <span className="nav_content">-</span>
                </li>
                <li className="nav_item total_cash">
                     <span className="nav_title">订单总价</span>
                    <span className="nav_content">¥1160</span>
                </li>
                <li className="nav_item actiual_cash">
                    <span className="nav_title">实付款</span>
                    <div className="nav_content cash_count">
                        <span className="money">¥2000.00</span>
                        <p className="deposit">
                            <span>订金</span>
                            <span>¥1160</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}