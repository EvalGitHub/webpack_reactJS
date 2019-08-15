import * as React from 'react';
export function OrderInfo () {
    return (
        <div className="order_info_wrapper">
            <dl>
                {/* <dt className="info_title">商品服务协议</dt> */}
                <dd className="info_item">
                    <span className="info_title">订单编号：</span>
                    <span className="info_text">102938388568</span>
                </dd>
                <dd className="info_item">
                    <span className="info_title">创建人：</span>
                    <span className="info_text">张大喵</span>
                </dd>
                <dd className="info_item">
                    <span className="info_title">创建时间：</span>
                    <span className="info_text">2019-09-09 12:00:00</span>
                </dd>
            </dl>
        </div>
    )
}