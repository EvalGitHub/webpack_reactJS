import 'react-hot-loader';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Routeconfig from '@/route';
import {init_config} from '@/service/http_config/domainSetting';
import 'antd/dist/antd.css';
import '@/scss/reset.less';
import '@/scss/common.less';
class App extends React.Component {
  render() {
    return (
     <Routeconfig/>
    );
  }
};

function startRenderDom () {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
};

init_config(startRenderDom);
