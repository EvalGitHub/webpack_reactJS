import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Routeconfig from '@/route';
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
