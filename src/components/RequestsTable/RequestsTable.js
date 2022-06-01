import styles from './RequestsTable.module.css';
import React, { useState } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '8',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '9',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '10',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '8',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '9',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '10',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    name: record.name,
  }),
};





const RequestsTable = () => {
   
    return (
      <div className={styles.tableWrap}>
  
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection
          }}
          columns={columns}
          dataSource={data}
          scroll={{x: true, y: true}}
        />
      </div>
    );
}

export {RequestsTable}