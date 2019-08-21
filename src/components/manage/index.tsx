import  * as React from 'react';
import {Route,BrowserRouter as Router, Link } from "react-router-dom";
import LeftNav from '@/components/left_nav';
import HeaderNav from '@/components/header_nav';
import Works from '@/components/works';
import User from '@/components/user';
import  './index.less';
interface initProps {};
interface initState {};
class ManageContainer extends React.Component<initProps, initState> {
  constructor (props:initProps) {
    super(props);
  };
  render () {
    return (
      <div className='manage_container'> 
        <LeftNav/>
        <article className='right_wrapper'>
          <section className='header_wrapper'>
            <HeaderNav/>
          </section>
          <section className='content_wrapper'>
            <Route path="/manage/works" component={Works}/>
            <Route path="/manage/user" component={User}/>
          </section>
        </article>
      </div>
    )
  }
}

export default ManageContainer;