

import * as React from 'react';
import  * as styles from './index.scss';
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
  certCode?: number | string,
  phoneNumber?: number| string,
  phoneNumberNotice?: boolean,
  certCodeNotice?: boolean,
  loginSuccess?: boolean,
  isNotRegisted?: boolean,
  certText?: string,
  canLogin?: boolean,
  timer?: null,
  [propName: string]: any
};

class Login extends React.Component<initProps, initState> {
  myref:any = '';
  myrefs:any = '';
  constructor (props:initProps) {
    super(props);
    this.state = {
      phoneNumber: 0,
    };
    this.myref = React.createRef();
  }
  login () {
    this.goWorksManage();
  };

  goWorksManage () {
    // console.log(this.myref)
    console.log(this.myrefs)
  };

  getComponent = async () => {
    const module = await import(/* webpackChunkName:"createElement" */ '@/utils/index');
    module.createElement().then((component:any) => {
      document.body.appendChild(component);
    });
    //  const _ = await import(/* webpackChunkName:"lodash" */ 'lodash');
    //   let element = document.createElement('div');
    //   element.innerHTML = _.join(['Dell', 'Lee'], '-');
    //   document.body.appendChild(element);
  };

  render () {
    return (
     <div className={styles.login_wrapper}>
       <p className={styles.login_nav} onClick={this.getComponent} ref={ (ref) => this.myrefs = ref}>登录</p>
       <section>
         <p className={[`${styles.input_wrapper}`, `${styles.one_px_border_bottom}`].join(' ')}>
           <input type='phoneNumber'  pattern='[0-9]*'  className={styles.input_item}   placeholder='请输入收到"购买链接短信"的手机号'/>
         </p>
         <div className={[`${styles.input_wrapper}`, `${styles.one_px_border_bottom}`].join(' ')}>
            <p className={styles.input_inner_wrapper}>
              <input type='certCode' pattern='[0-9]*' className={styles.input_item} placeholder='请输入验证码'  />
              <button
                className={[`${styles.get_code_btn}`, `${String(this.state.phoneNumber).length === 11 ? styles.active : ''}`].join(' ')}
                >{this.state.certText}</button>
            </p>
         </div>
         <button className={[`${styles.login_btn}`, `${this.state.canLogin ? styles.active : ' '}`].join(' ')} onClick={this.login.bind(this)} >立即登录</button>
       </section>
     </div>
    );
  }
}

export default Login;