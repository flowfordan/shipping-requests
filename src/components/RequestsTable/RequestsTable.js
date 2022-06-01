import styles from './RequestsTable.module.css';
import React, { useState } from 'react';
import { Table, Select } from 'antd';

const { Option } = Select;

const initData = [
  {
    key: '1',
    name: 'Rrquest 1',
    to: [{id: 0, name: 'point unload 1'}, {id: 1, name: 'point unload 2'}, {id: 2, name: 'point unload 3'}],
    from: [{id: 0, name: 'point load 1'}, {id: 1, name: 'point load 2'}, {id: 2, name: 'point load 3'}]
  },
  {
    key: '2',
    name: 'Request 2',
    to: [{id: 0, name: 'point unload 1'}, {id: 1, name: 'point unload 2'}, {id: 2, name: 'point unload 3'}],
    from: [{id: 0, name: 'point load 1'}, {id: 1, name: 'point load 2'}, {id: 2, name: 'point load 3'}]
  },
  {
    key: '3',
    name: 'Request 3',
    to: [{id: 0, name: 'point unload 1'}, {id: 1, name: 'point unload 2'}, {id: 2, name: 'point unload 3'}],
    from: [{id: 0, name: 'point load 1'}, {id: 1, name: 'point load 2'}, {id: 2, name: 'point load 3'}]
  }
]; // rowSelection object indicates the need for row selection



const columns = [
  {
    title: 'Номер',
    dataIndex: 'key',
  },

  {
    title: 'Наименование',
    dataIndex: 'name',
    render: (text) => text
  },

  {
    title: 'Пункт загрузки',
    dataIndex: 'from',
    render: 
    (value) => <Select defaultValue={value} style={{
        width: 120,
      }}
      // onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        </Select>
  },

  {
    title: 'Пункт разгрузки',
    dataIndex: 'to',
    // render: (points) => <Select defaultValue="{points[0].name}" style={{
    //   width: 120,
    // }}
    // // onChange={handleChange}
    // >
    //   {/* <Option value="jack">Jack</Option>
    //   <Option value="lucy">Lucy</Option> */}
    //   </Select>
  },
];

const data = [
  {
    key: '1',
    name: 'Rrquest 1',
    to: 'point unload 1',
    from: 'point load 1'
  },
  {
    key: '2',
    name: 'Request 2',
    to: 'point unload 1',
    from: 'point load 1'
  },
  {
    key: '3',
    name: 'Request 3',
    to: 'point unload 1',
    from: 'point load 1'
  }
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

    //initial data from mock
    //request chosen, from, to
    //[{requestNum: 999, from: 45, to: 54}, {}]
   
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