import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import './index.less'
// 实时的数据大盘
const tabList = ['全部项目','未解决的问题','忽略过的问题']
export default function InTimeTable(props) {
  const [selectedTab,setSelectedTab] = useState(0);
  return (
    <div className='in-time-table-box'>
      <div className='in-time-box-title' >
        <div className='logo-box' >
        <span >Issues</span>
        <div className='play'></div>
        </div>
        <div>
          {tabList.map((value,index)=>{
            return (
              <span key={value+index} onClick={()=>setSelectedTab(index)} className={`button-style ${selectedTab===index?'select-button':''}`}>{value}</span>
            )
          })}
        </div>
      </div>
      <div className='content-box'>
         
      </div>
    </div>
  )
}
