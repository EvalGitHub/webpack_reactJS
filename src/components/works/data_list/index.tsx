import { Table } from 'antd';
import  * as React from 'react';
import  './index.less';

interface DataListProps {
  dataList: any[],
  showModal?: (modalType: string) => void;
  getSelectKeys?: any
};
interface DataListState { 
  modalType: string,
  selectedRowKeys: Array<string|number>,
  selectItem: any,
  columns: any
};

class DataList extends React.Component<DataListProps, DataListState> {
  constructor(props: DataListProps) {
    super(props);
    this.state = {
      modalType: 'noModal',
      selectedRowKeys: [],
      selectItem: '',
      columns: [
        {
          title: '用户ID',
          dataIndex: 'userId',
          sorter: (a:any, b:any) => a.name.length - b.name.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: '用户名字',
          dataIndex: 'userName',
        },
      ]
    };
  };

  // 勾选的数据
  onSelectChange = (selectedRowKeys: Array<string|number>) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
    this.props.getSelectKeys(selectedRowKeys);
  };

  // 分页，筛选
  onChange (pagination: any, filters: any, sorter: any) {
    console.log('params', pagination, filters, sorter);
  }
  
  render() {
    const {selectedRowKeys } = this.state;
    const paginationConfig = {
      defaultCurrent: 1,
      defaultPageSize: 2,
      total: this.props.dataList.length
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <section className="data_list">
        <div className="list_data_wrapper">
          <Table 
            pagination={paginationConfig}
            rowSelection={rowSelection as any}
            columns={this.state.columns} 
            dataSource={this.props.dataList}
            onChange={this.onChange.bind(this)} />
        </div>
      </section>
    )
  }
}
export default DataList;