import 'react-hot-loader'
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
// module.hot.accept()
 
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
