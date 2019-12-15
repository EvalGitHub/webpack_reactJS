import * as React from "react";
import { MyContainer } from './index.container';
// @MyContainer
class MyComponent extends React.Component {
  render () {
    return (
      <input type="text"/>
    )
  }
}
export default MyContainer(MyComponent)