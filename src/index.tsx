import '@babel/polyfill';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Routeconfig from '@/route';
import * as Sentry from '@sentry/browser';
import '@/scss/reset.scss';
import '@/scss/common.scss';
import { hot } from 'react-hot-loader/root';
import { init_config } from '@/service/http_config/domainSetting';
// import { loadScript } from "@/utils";

// 创建一个context
export const NameContext = React.createContext({
  name: '默认名称',
  changeName: () => {},
});
interface initProps {
  [propsName:string]:any;
}
interface initState {
  [propsName:string]:any,
}
class App extends React.Component<initProps, initState> {
  constructor (props:any) {
    super (props);  
    this.state = {
      name: '我不是默认值'
    }
  }

  changeName = () => {
    this.setState({
      name: '我是改变的值'
    })
  };
  componentWillMount() {
    document.dispatchEvent(new Event('render-event'));
  }
  render() {
    return (
     <NameContext.Provider value={{name: this.state.name, changeName: this.changeName}}>
      {Routeconfig()}
     </NameContext.Provider>
    );
  }
};

function startRenderDom () {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
};

startRenderDom();

hot(App);
if (module.hot) {
  module.hot.accept(() => {
    console.log('login 更新了')
  });
};

function initSentry () {
  Sentry.init({
    dsn: "https://a9ab229b24b348b8adb2faf56968031e@sentry.io/1798784",
    environment: 'development'
  });
}
initSentry();
init_config();

// useServiceWork();
function useServiceWork() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'all',
      }).then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
}

// navigator.serviceWorker.addEventListener('controllerchange', () => {
//   window.location.reload();
// })
