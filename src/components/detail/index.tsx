import * as React from 'react';

interface initProps {};
interface initState {};
export class Detail extends React.Component<initProps, initState> {
  constructor (props:initProps) {
    super(props);
  }

  getComponent2 = async () => {
    const module = await import(/* webpackChunkName:"createElement" */ '@/utils/index');
    module.createElement().then((component:any) => {
      document.body.appendChild(component);
    });
  };

  render () {
    return <>
      this is detail page
      <p onClick={this.getComponent2}>create HTML</p>
    </>
  }
}