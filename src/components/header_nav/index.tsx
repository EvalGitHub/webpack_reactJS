import  * as React from 'react';
import  './index.less';
interface initProps {};
interface initState {};
class HeaderNav extends React.Component<initProps, initState> {
  constructor (props:initProps) {
    super(props);
  };
  render () {
    return (
      <div className='pro_global_header'> 
        this is header nav 
      </div>
    )
  }
}

export default HeaderNav;