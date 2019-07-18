import 'react-hot-loader'
import { hot } from 'react-hot-loader/root';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import routeconfig from '@/route/index'

class App extends React.Component {
  render() {
    return (
     <div>
       {routeconfig()}
     </div>
    );
  }
}

const root = hot(App)
ReactDOM.render(
  <root/>,
  document.getElementById('root')
);
