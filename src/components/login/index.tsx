

import * as React from 'react';
import Toast from '@/common/toast/index';
import {envConfig} from '../../../config'
import '@/scss/login/index';

const infoArr = {
  phoneNumberNotice: '只能输入11位数字哦',
  certCodeNotice: '验证码错误',
  loginSuccess: '登录成功',
  isNotRegisted: '您还未注册'
};
let timer:any = null;
interface initProps {};
interface initState {
  rtCode?: number | string,
  certCode: number | string,
  phoneNumber: number| string,
  phoneNumberNotice: boolean,
  certCodeNotice: boolean,
  loginSuccess: boolean,
  isNotRegisted: boolean,
  certText: string,
  canLogin: boolean,
  timer: null,
  [propName: string]: any
};
class Login extends React.Component <initProps, initState> {
  constructor (props:any) {
    super(props);
    this.state = {
      phoneNumber: '',
      certCode: '',
      phoneNumberNotice: false,
      certCodeNotice: false,
      loginSuccess: false,
      isNotRegisted: false,
      certText: '获取验证码',
      canLogin: false,
      timer: null,
      
    };
  };

  getNumber (event:any) {
    let phNumber = event.target.value;
    if (phNumber.length > 11) {
      event.target.value = phNumber = String(phNumber).substr(0, 11);
      // show toast
      this.setState({
        phoneNumberNotice: true
      })
      setTimeout(() => {
        this.setState({
          phoneNumberNotice: false
        })
      }, 1000)
    } else if (this.state.phoneNumberNotice) {
      this.setState({
        phoneNumberNotice: false
      })
    }
    this.setState({
      phoneNumber: phNumber 
    })
  };
  
  getCertCodeByClick (event:any) {
    // TODO: 先出现极验弹窗, 通过验证之后，获取验证码，出现倒计时
    if (timer) {
      return;
    };
    let count = 60;
    timer = setInterval(() => {
      count -=1;
      if (count === 0) {
        clearInterval(timer);
        timer = null;
        this.setState({
          certText: '获取验证码',
          timer: null
        });
        return;
      };
      this.setState({
        certText: count + 's重新获取'
      });
    }, 1000);
  };
 
  getCertCode (event:any) {
    if (!event.target.value) {
      this.setState({
        canLogin: false,
        certCode: ''
      })
      return;
    };
    this.setState({
      canLogin: true,
      certCode: event.target.value
    })
  };

  showNoticeInfo () {
    return Object.keys(infoArr).map((item:string, key) => {
      let _item:string = item;
      if (this.state[_item]) {
        return (
          <div key={key}>
            {Toast.info(infoArr['phoneNumberNotice'])}
          </div>
        )
      } 
    });
  };

  login () {
    console.log(this.state.phoneNumber);
    console.log(this.state.certCode);
    /**
     * TODO: 
     * 1）certCode 验证 是否通过
     * 2）通过则跳转
     **/ 
  };

  render() {
    console.log(process.env.NODE_ENV)
    console.log(envConfig.host)
    return (
     <div className='login_wrapper'>
       <p className='login_nav'>登录</p>
       <section>
         <p className='input_wrapper one_px_border_bottom'>
           <input type='phoneNumber'  pattern='[0-9]*'  className='input_item' onInput={this.getNumber.bind(this)}  placeholder='请输入收到"购买链接短信"的手机号'/>
         </p>
         <div className='input_wrapper one_px_border_bottom'>
            <p className='input_inner_wrapper'>
              <input type='certCode' pattern='[0-9]*'    className='input_item' placeholder='请输入验证码' onInput={this.getCertCode.bind(this)}/>
              <button
                className={['get_code_btn', String(this.state.phoneNumber).length === 11 ? ' active' : ''].join(' ')}
                onClick={this.getCertCodeByClick.bind(this)}
                >{this.state.certText}</button>
            </p>
         </div>
         <button className={['login_btn', this.state.canLogin ? ' active' : ''].join(' ')} onClick={this.login.bind(this)} >立即登录</button>
       </section>
       {this.showNoticeInfo()}
     </div>
    );
  }
}
export default Login
