import  * as React from 'react';
import { Button } from 'antd';
// import { getWorksList } from '@/services/works';
import SearchTab from './search_bar';
import DataList from './data_list';
import { SureInfo } from './modal';
import  './index.less';

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
    // getWorksList().then(res => {
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
 
  deleteWorks () {
    SureInfo({
      title: '确认删除选中的作品吗？',
      content: '点击确认删除',
      cancelBtnText: '取消',
      sureBtnText: '确认',
      sureCallBack: () => {alert('点击了确定')},
      cancelCallBack: () => {alert('点解了取消')}
    });
  };

  deleteComment () {
    SureInfo({
      title: '确认删除选中的作品评论吗？',
      content: '点击确认删除',
      cancelBtnText: '取消',
      sureBtnText: '确认',
      sureCallBack: () => {alert('点击了确定')},
      cancelCallBack: () => {alert('点解了取消')}
    });
  };

  copyUserId () {

  };

  public render () {
    return (
      <div className="works_wrapper">
        <section className="top_des_wrapper">
          <span className="works_manage_text">作品管理</span>
          <Button className="action_btn" type="danger" onClick={this.deleteWorks.bind(this)}>删除作品</Button>
          <Button className="action_btn" type="danger" onClick={this.deleteComment.bind(this)}>删除评论</Button>
          <Button className="action_btn" type="primary" onClick={this.copyUserId.bind(this)}>复制用户ID</Button>
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