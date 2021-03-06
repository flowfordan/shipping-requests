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
  const [currentRow, setRow] = useState([]);
  const [activeRequests, setActiveRequests] = useState([]);

  //dropdown change handler
  const handlePointChange = (pointId, request, type) => {
    switch(type){
      case 'from':
        setPoints(prevPoints => {
          return(prevPoints.map( p => {
            if(p.requestId === request.requestId){
              return {
                ...p,
                fromPoints: p.fromPoints.map(fp => {
                  if(fp.fromId === pointId){
                    return {...fp, current: true}
                  }
                  return {...fp, current: false}
                })
              }
            }
            return p
          }))
        }) 
        return;
      case 'to':
        setPoints(prevPoints => {
          return(prevPoints.map( p => {
            if(p.requestId === request.requestId){
              return {
                ...p,
                toPoints: p.toPoints.map(fp => {
                  if(fp.toId === pointId){
                    return {...fp, current: true}
                  }
                  return {...fp, current: false}
                })
              }
            }
            return p
          }))
        }) 
        return;
      default: return
    }
  }

  //set active rows/requests
  const handleRequestChoise = (requests) => {
    
    let activeRequests = requests;
    if(requests){
      activeRequests = requests.map(r => {
      return(
        {
          requestId: r.requestId,
          currentFrom: r.fromPoints.find(fp => fp.current === true),
          currentTo: r.toPoints.find(fp => fp.current === true)
        }
      )
    })
    }
    setActiveRequests(activeRequests);
  }

  //radio selection of row
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRow) => {
      setRow(selectedRow);
      handleRequestChoise(selectedRow);
    }
  };
  //update row data if dropdown changed
  useEffect(() => {
    if(currentPoints && currentRow.length !== 0){
      let updPoint = currentPoints.find(p => p.requestId === currentRow[0].requestId)
      if(updPoint){
        setRow([updPoint])
      }
    }   
  },
  [currentPoints])

  //upd active requests when upd dropdown value
  useEffect(() => {
    handleRequestChoise(currentRow)
  }, 
  [currentRow])

  //dispatch active request
  useEffect(() => {
    onChooseRequests(activeRequests)
  }, 
  [activeRequests])

  return (
    <div className={styles.tableWrap}>
      <Table
        rowSelection={{
          type: 'radio',
          ...rowSelection
        }}
        dataSource={currentPoints}
        scroll={{x: true, y: true}}
        rowKey="requestId">

      <Column title="No." dataIndex='requestId' />

      <Column title="????????????????????????" dataIndex='requestId' 
      render={(num) => {return `???????????? ${num}`}} />

      <Column title="?????????? ????????????????" dataIndex='fromPoints'
        render={
          (values, request) => 
        <Select 
        defaultValue={`?????????? ${values[0].fromId}`}
        value={`?????????? ${values.find(v => v.current === true)? values.find(v => v.current === true).fromId : null}`} 
        style={{
          width: 120,
        }}
        onChange={(value) => handlePointChange(value, request, 'from')}>
          {values.map(v => {
            return (
              <Option key={v.fromId} value={v.fromId}>{`?????????? ${v.fromId}`}</Option>
            )
          })}
        </Select>
      } 
      />
      <Column title="?????????? ????????????????" dataIndex='toPoints' 
      render={
        (values, request) => 
      <Select 
      defaultValue={`?????????? ${values[0].toId}`} 
      value={`?????????? ${values.find(v => v.current === true)? values.find(v => v.current === true).toId : null}`} 
      style={{
        width: 120,
      }}
      onChange={(value) => handlePointChange(value, request, 'to')}>
        {values.map(v => {
          return (
            <Option key={v.toId} value={v.toId}>{`?????????? ${v.toId}`}</Option>
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