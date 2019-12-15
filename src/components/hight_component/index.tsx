import * as React from "react";

export const MyContainer = (WrappedComponent:any) => 
  class extends React.Component {
    render () {
      return <WrappedComponent {...this.props} />;
    }
  }

