import * as React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};
interface initProps {
  [propsName:string]:any
};
interface initState {
  [propsName:string]:any
}

export default class Link extends React.Component<initProps, initState> {
  constructor(props:initProps) {
    super(props);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter () {
    this.setState({class: STATUS.HOVERED});
  };

  _onMouseLeave () {
    this.setState({class: STATUS.NORMAL});
  };

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter.bind(this)}
        onMouseLeave={this._onMouseLeave.bind(this)}
      >
        {this.props.children}
      </a>
    );
  }
}