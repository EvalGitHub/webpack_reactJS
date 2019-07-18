import {Route,BrowserRouter as Router, Link } from "react-router-dom"
import * as React from 'react';
import Login from '@/components/Login'
import Detail from '@/components/Detail'

 // route link 
function RouteLink () {
    return (
        <ul>
            <li>
                <Link to="/">to login page</Link>
                <Link to="/detail">to detail page</Link>
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
            <Route path="/detail" component={Detail}/>
        </Router>
    )
}

export default routeConfig