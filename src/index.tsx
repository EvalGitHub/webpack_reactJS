import 'react-hot-loader';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import routeconfig from '@/route/index.tsx';
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
 
 
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
