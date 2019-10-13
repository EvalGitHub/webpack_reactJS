import * as ReactDOM from 'react-dom';
import * as React from 'react';

interface initProps {};
interface initState {};
class App extends React.Component<initProps, initState> {
  render () {
    return (
      <div>
        <div>this is list page</div>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));