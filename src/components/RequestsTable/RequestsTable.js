import styles from './RequestsTable.module.css';
import React, { useEffect, useState } from 'react';
import { Table, Select } from 'antd';
const { Column } = Table;
const { Option } = Select;


const RequestsTable = ({requests, onChooseRequests}) => {
 
  const initData = requests.map(r => {
    return(
      {
        ...r, 
        fromPoints: r.fromPoints.map(p => {
          if(r.fromPoints.indexOf(p) === 0){
            return({...p, current: true})}
          return ({...p, current: false})
        }), 
        toPoints: r.toPoints.map(p => {
          if(r.toPoints.indexOf(p) === 0){
            return({...p, current: true})}
          return ({...p, current: false})
        }),
      }
    )
  })
  
  const [currentPoints, setPoints] = useState(initData);
  const [activeRequests, setActiveRequests] = useState([])
    //requests id frpm to currentfrom current to
  console.log(currentPoints);
  console.log(activeRequests)
  
// rowSelection object indicates the need for row selection


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    //dispatch UseEffect selectedids + current points
    handleRequestChoise(selectedRows)
  },
  getCheckboxProps: (record) => ({
    name: record.name,
  }),
};

  const handlePointChange = (pointId, request, type) => {
    console.log(pointId, request, type);
    switch(type){
      case 'from':
        setPoints(prevPoints => {
          return(prevPoints.map( p => {
            return {
              ...p,
              fromPoints: p.fromPoints.map(fp => {
                if(fp.fromId === pointId){return {...fp, current: true}}
                return {...fp, current: false}
              })
            }
          }))
        }) 
        return;
      case 'to':
        setPoints(prevPoints => {
          return(prevPoints.map( p => {
            return {
              ...p,
              toPoints: p.toPoints.map(fp => {
                if(fp.toId === pointId){return {...fp, current: true}}
                return {...fp, current: false}
              })
            }
          }))
        }) 
        return;
      default: return
    }
  }


  const handleRequestChoise = (requests) => {
    let activeRequests = requests.map(r => {
      return(
        {
          requestId: r.requestId,
          currentFrom: r.fromPoints.find(fp => fp.current === true),
          currentTo: r.toPoints.find(fp => fp.current === true)
        }
      )
    })
    setActiveRequests(activeRequests);
  }


  useEffect(() => {
    //dispatch to redux
    onChooseRequests(activeRequests)
  }, 
  [activeRequests])


    return (
      <div className={styles.tableWrap}>
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection
          }}
          dataSource={currentPoints}
          scroll={{x: true, y: true}}
          rowKey="requestId">

        <Column title="No." dataIndex='requestId' />

        <Column title="Наименование" dataIndex='requestId' 
        render={
          (num) => {return `Заявка ${num}`}
        } />

        <Column title="Пункт загрузки" dataIndex='fromPoints'
          render={
            (values, request) => 
          <Select 
          defaultValue={`Пункт ${values[0].fromId}`}
          value={`Пункт ${values.find(v => v.current === true)? values.find(v => v.current === true).fromId : null}`} 
          style={{
              width: 120,
            }}
            onChange={(value) => handlePointChange(value, request, 'from')}
            >
              {values.map(v => {
                return (
                  <Option key={v.fromId} value={v.fromId}>{`Пункт ${v.fromId}`}</Option>
                )
              })}
          
          
          </Select>} 
        />
        <Column title="Пункт доставки" dataIndex='toPoints' 
          render={
            (values, request) => 
          <Select 
          defaultValue={`Пункт ${values[0].toId}`} 
          value={`Пункт ${values.find(v => v.current === true)? values.find(v => v.current === true).toId : null}`} 
          style={{
              width: 120,
            }}
            onChange={(value) => handlePointChange(value, request, 'to')}>
              {values.map(v => {
                return (
                  <Option key={v.toId} value={v.toId}>{`Пункт ${v.toId}`}</Option>
                )
              })}
              </Select>
          } 
        />
        </Table>
      </div>
    );
}

export {RequestsTable}