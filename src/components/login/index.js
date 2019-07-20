

import * as React from 'react';

import '@/scss/login/index';

class Login extends React.Component {

  render() {
    return (
     <div className='login_wrapper'>
       <p className="login_nav">登录</p>
       <section>
         <p className="input_wrapper one_px_border_bottom">
           <input type="number"  pattern="[0-9]*" maxLength="11" className="input_item"  placeholder='请输入收到"购买链接短信"的手机号'/>
         </p>
         <div className="input_wrapper one_px_border_bottom">
            <p className="input_inner_wrapper">
              <input type="number" pattern="[0-9]*" maxLength="6" className="input_item" placeholder="请输入验证码"/>
              <button className="get_code_btn active">获取验证码</button>
            </p>
         </div>
         <button className="login_btn">立即登录</button>
       </section>
     </div>
    );
  }
}
export default Login
