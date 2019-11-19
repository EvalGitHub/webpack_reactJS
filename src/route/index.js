import { Route, BrowserRouter as Router } from "react-router-dom";
import * as React from 'react';
import loadable from "@loadable/component";
// route to component 
function Routeconfig() {
  return (
    <Router>
      {/* <RouteLink/> */}
      <Route exact path="/" component={loadable(() => import("@/components/login"))}/>
      <Route exact path="/detail" component={loadable(() => import("@/components/detail"))}/>
      <Route exact path="/hook_component" component={loadable(() => import("@/components/hook_component"))}/>
      <Route exact path="/create_ele" component={loadable(() => import("@/components/react_create_ele"))}/>
      <Route exact path="/event_trans_info" component={loadable(() => import("@/components/event_trans_info"))}/>
    </Router>
  )
}
export default Routeconfig