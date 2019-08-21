import  * as React from 'react';
import { Link } from "react-router-dom";
import  './index.less';
interface initProps {};
interface initState {};
class LeftNav extends React.Component<initProps, initState> {
  constructor (props:initProps) {
    super(props);
  };
  render () {
    return (
      <div className='pro_global_left'> 
        <section className='logo_title_area'>
          <img className='pro_logo' src={require('@/assets/favicon.png')} alt="nemologo"/>
          <span className='pro_title'>管理后台</span>
        </section>
        <section className='nav_wrapper'>
          <ul className='nav_list_wrapper'>
            <li className='nav_list_item'>
              <Link className='nav_list_text'  to="/manage/works">作品管理</Link>
            </li>
            <li className='nav_list_item'>
              <Link  className='nav_list_text' to="/manage/user">用户管理</Link>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default LeftNav;