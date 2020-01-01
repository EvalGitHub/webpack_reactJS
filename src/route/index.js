import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import * as React from 'react';
import loadable from "@loadable/component";
// route to component 
function Routeconfig() {
  return (
    <Router>
      {/* <RouteLink/> */}
      <Switch>
        <Route exact path="/" component={loadable(() => import("@/components/login"))}/>
        <Route exact path="/detail" component={loadable(() => import("@/components/detail"))}/>
        <Route exact path="/hook_component" component={loadable(() => import("@/components/hook_component"))}/>
        <Route exact path="/create_ele" component={loadable(() => import("@/components/react_create_ele"))}/>
        <Route exact path="/event_trans_info" component={loadable(() => import("@/components/event_trans_info"))}/>
        <Route exact path="/css_grid_usage" component={loadable(() => import("@/components/css_grid_usage"))}/>
        <Route exact path="/hight_component" component={loadable(() => import("@/components/hight_component/my_component"))}/>
        <Route exact path="/hight_component02" component={loadable(() => import("@/components/hight_component/my_component02"))}/>
        <Route exact path="/mobx" component={loadable(() => import("@/components/mobx_use"))}/>
        <Redirect exact from="/" to="/detail"></Redirect>
      </Switch>
    </Router>
  )
}
export default Routeconfig