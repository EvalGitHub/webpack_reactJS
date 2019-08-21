

import * as React from 'react';
import { Input, Button } from 'antd';
import {envConfig} from '../../../config'
import  './index.less';
 
interface initProps {};
interface initState {};
class Login extends React.Component<initProps, initState> {
  login () {
    this.goWorksManage();
  };

  goWorksManage () {
   
  };

  render () {
    return (
      <div className="login_wrapper">
          <p className="login_title">Nemo运营管理后台</p>
          <div className="input_wrapper">
              <Input className="input_item" size="large" placeholder="用户名" />
              <Input className="input_item" type="password" size="large" placeholder="密码" />
              <Button className="input_btn" onClick={this.login.bind(this)}  type="primary">登录</Button>
          </div>
        </div>
    )
  }
  
}

export default Login;