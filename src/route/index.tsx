import {Route,BrowserRouter as Router, Link } from "react-router-dom";
import * as React from 'react';
import Login from '@/components/login';
import Manage from '@/components/manage';
// import User from '@/components/User';
 
 // route link 
function RouteLink () {
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
function routeConfig () {
    return (
        <Router>
            {/* <RouteLink/> */}
            <Route exact path="/" component={Login}/>
            <Route path="/manage" component={Manage}/>
        </Router>
    )
}

export default routeConfig