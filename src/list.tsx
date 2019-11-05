import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { NameContext } from '@/index';
interface initProps {};
interface initState {};
class App extends React.Component<initProps, initState> {
  render () {
    return (
      <NameContext.Consumer>
        {
          (name) => (
            <>
              <div>this is list page</div>
              <p>{name.name}</p>
            </>
          )
        }
      </NameContext.Consumer>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));