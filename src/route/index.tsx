import { Route, HashRouter as Router, Link } from "react-router-dom";
import * as React from 'react';
import Login from '@/components/login';
import { Detail } from '@/components/detail';
// import Order from '@/components/order/index.tsx';
// import PaymentInfo from '@/components/payment/index.tsx';
// route link 
function RouteLink() {
  return (
    <ul>
      <li>
        <Link to="/">to login page</Link>
        <Link to="/order">to detail page</Link>
      </li>
    </ul>
  )
}

// route to component 
function Routeconfig() {
  return (
    <Router>
      {/* <RouteLink/> */}
      <Route exact path="/" component={Login} />
      <Route exact path="/Detail" component={Detail} />
    </Router>
  )
}

export default Routeconfig