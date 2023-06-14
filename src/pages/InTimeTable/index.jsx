import React, { useEffect, useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import './index.less'
import { useSelector } from 'react-redux';
import {Table,} from 'antd'
// 实时的数据大盘
const tabList = ['全部项目','未解决的问题','忽略过的问题'];
// {name:'前端监控',id:1,create:'zxc',maintainer:['asd','asda']
const columns = [{title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 150,},{title: 'create',
    dataIndex: 'create',
    key: 'create',
    render: (text) => <a>{text}</a>,
    width: 150,},{title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
    width: 150,},{title: 'maintainer',
    dataIndex: 'maintainer',
    key: 'maintainer',
    render: (text) => text.map((value)=>{return <span>{value}、</span>}),
    width: 150,}]
export default function InTimeTable(props) {
  const [selectedTab,setSelectedTab] = useState(0);
  const {itemList} = useSelector(state=>state.items)
  useEffect(()=>{
    // todo  请求获取表格数据
  },[])
  return (
    <div className='in-time-table-box'>
      <div className='in-time-box-title' >
        <div className='logo-box' >
        <span >Issues</span>
        <div className='play'></div>
        </div>
        <div className='tab-list-box'>
          {tabList.map((value,index)=>{
            console.log(index);
            return (
              <span key={value+index} onClick={()=>setSelectedTab(index)} className={`button-style ${selectedTab===index?'select-button':''}`}>{value}</span>
            )
          })}
        </div>
      </div>
      <div className='in-time-content-box'>
         {itemList.length>0?<Table className='table-w' columns={columns} dataSource={itemList} />:''}
      </div>
    </div>
  )
}
