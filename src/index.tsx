import "@babel/polyfill";
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Routeconfig from '@/route';
import * as Sentry from '@sentry/browser';
import '@/scss/reset.scss';
import '@/scss/common.scss';
class App extends React.Component {
  render() {
    return (
     <div>
      {Routeconfig()}
     </div>
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

if (module.hot) {
  module.hot.accept()
}

function initSentry () {
  Sentry.init({
    dsn: "https://a9ab229b24b348b8adb2faf56968031e@sentry.io/1798784",
    environment: 'development'
  });
}
initSentry();
