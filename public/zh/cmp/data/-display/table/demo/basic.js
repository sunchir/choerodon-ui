import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Icon, Divider } from 'choerodon-ui';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="#">Delete</a>
      <Divider type="vertical" />
      <a href="#" className="c7n-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

ReactDOM.render(<Table columns={columns} dataSource={data} filterBarPlaceholder="过滤表" onColumnFilterChange={item => console.log(item)} />, document.getElementById('container'));
