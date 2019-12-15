import * as React from "react";
import { MyContainer } from './index';
@MyContainer
class MyComponent extends React.Component {
  render () {
    return (
      <>
        属性代理的高阶组件
        this is MyComponent page 
        {  console.log(this.props)}
      </>
    )
  }
}
export default MyComponent;
// export default MyContainer(MyComponent);