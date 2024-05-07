import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import {getRace} from '../api/task.js' 

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'userId',
    dataIndex: 'userId',
    key: 'userId',
  },  {
    title: 'category',
    dataIndex: 'categoryId',
    key: 'categoryId',
  },
   {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [];
const Tables = () =>{
    const [race, setRace]= useState([])
    useEffect(()=>{
        const res = getRace()
            .then((val)=>{
                const arr = val.data.data
// filter for user auth
                // const arrMod = arr.filter((item)=>{
                //   if(item.categoryId == 1){ return true}
                // })
                // console.log(arrMod, 'arr mod')
               console.log(arr , "arr")
                setRace(arr)
            })
           
}, [])



    return (
<Table columns={columns} dataSource={race} />
    )

} 
export default Tables;