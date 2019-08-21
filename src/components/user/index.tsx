import  * as React from 'react';
import { Button } from 'antd';
import SearchTab from './search_bar';
import { SureInfo } from './modal';
import DataList from './data_list';
import './index.less';

interface initProps {};
interface initState {
  dataList: any[],
};

class WorksPage extends React.Component<initProps, initState> {
  constructor (props:any) {
    super(props);
    this.state = {
      dataList: [],
    }
  };

  componentWillMount () {
    // getUserList().then(res => {
    //   this.setState({
    //     dataList: res
    //   })
    // });
  };

  // 获得选中的数据
  getSelectKeys (keys:any) {
    console.log('选中的数据',keys)
    return keys;
  };
 
  rightWord (flag: string) {
    SureInfo({
      title: `确定${flag === 'noWord'? '禁言': '解禁言'}选中的用户吗？`,
      content: '点击确认操作',
      cancelBtnText: '取消',
      sureBtnText: '确认',
      sureCallBack: () => {alert('点击了确定')},
      cancelCallBack: () => {alert('点解了取消')}
    });
  };

  rightRelease (flag: string) {
    SureInfo({
      title: `确认${flag === 'noRelesed'? '禁发布': '解发布'}选中的用户吗？`,
      content: '点击确认删除',
      cancelBtnText: '取消',
      sureBtnText: '确认',
      sureCallBack: () => {alert('点击了确定')},
      cancelCallBack: () => {alert('点解了取消')}
    });
  };

  rightLogin (flag: string) {
    SureInfo({
      title: `确认${flag === 'noLogin'? '禁登录': '解登录'}选中的用户吗？`,
      content: '点击确认删除',
      cancelBtnText: '取消',
      sureBtnText: '确认',
      sureCallBack: () => {alert('点击了确定')},
      cancelCallBack: () => {alert('点解了取消')}
    });
  };

  public render () {
    return (
      <div className="works_wrapper">
        <section className="top_des_wrapper">
          <span className="works_manage_text">用户管理</span>
          <Button className="action_btn"type="danger" onClick={this.rightWord.bind(this, 'noWord')}>禁言</Button>
          <Button className="action_btn"type="danger" onClick={this.rightRelease.bind(this, 'noRelesed')}>禁发布</Button>
          <Button className="action_btn"type="danger" onClick={this.rightLogin.bind(this, 'noLogin')}>禁登录</Button>
          <Button className="action_btn"type="primary" onClick={this.rightWord.bind(this, 'canWord')}>解禁言</Button>
          <Button className="action_btn"type="primary" onClick={this.rightRelease.bind(this, 'canRelease')}>解发布</Button>
          <Button className="action_btn"type="primary" onClick={this.rightLogin.bind(this, 'canLogin')}>解登录</Button>
        </section>
        <SearchTab />
        {
          this.state.dataList.length === 0 ? '' :  
          <DataList 
            getSelectKeys={this.getSelectKeys.bind(this)}
            dataList={this.state.dataList}/> 
        }
      </div>
    );
  };
};
export default WorksPage;