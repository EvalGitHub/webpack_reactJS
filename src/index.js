import 'react-hot-loader';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import routeconfig from '@/route/index';
import '@/scss/reset.scss';
import '@/scss/common.scss';
class App extends React.Component {
  render() {
    return (
     <div>
       {routeconfig()}
     </div>
    );
  }
}
if (module.hot) {
  module.hot.accept(() => {
    console.log('login 更新了')
  });
}
 
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
