import * as React from 'react';
import { Select, Input, Button } from 'antd';
import './index.less';
const { Option } = Select;
interface initProps {};
interface intiState {
  
};
class SearchTab extends React.Component<initProps, intiState> {
  constructor (props:initProps) {
    super(props);
    this.state = {

    }
  };
  public render() {
    return (
      <section className="search_bar">
        <ul className="search_wrapper">
          <li className="search_item">
            <label htmlFor='用户ID'>用户ID</label>
            <Input placeholder='输入用户ID' className="input_item" />
          </li>
          <li className="search_item">
            <Button type='primary'>搜索用户信息</Button>
          </li>
        </ul>
      </section>
    )
  }
}
export default SearchTab;