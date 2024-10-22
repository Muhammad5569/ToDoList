import React, { useEffect, useState } from 'react';
import { Button, Input, Space, Table } from 'antd';
import {createTask, deleteTask, editTask, getRace} from '../api/task.js' 




const Tables = () =>{
  const [race, setRace]= useState([])
  const [inputValue, setinputValue] = useState('')
  const [editingKey, setEditingKey] = useState('')
  const [editedTask, setEditedTask] = useState('')
      useEffect(()=>{
            getRace()
            .then((val)=>{
             setRace( val.data)
            })
      }, [])
  const handleEdit = (record) => {
    setEditingKey(record._id)
    setEditedTask(record.description)    
  };
  const handleUpdate = (record) => {
    try {
      const updatedTask = {newDescription: editedTask}
      editTask(record._id, updatedTask)
       .then(
          getRace()
           .then((val) => {
              setRace(val.data)
              setEditingKey('')            
            }
           )
        )
    } catch (error) {
      console.log('error occured while editing', error)
    }
  }
  const handleCancel = () => {
    setEditingKey('')
  }
  const handleDelete = (record) => {
    deleteTask(record._id).then(()=>{
      getRace().then((val)=>{
        setRace(val.data)
      })
    })

  };
 const newTask = ()=>{
  try {
    createTask(Ntask).then(()=>{
      getRace().then((val)=>{
        setRace(val.data)
        setinputValue('')
      })
    })
    // document.querySelector("#newTaskInput").value= 'lol'

       } catch (error) {
    console.log(error)
      }  
  }
  const Ntask = {
        description:inputValue,
        userId: JSON.parse(localStorage.getItem('user'))._id
  }
  const handleInputChange = (e)=>{
  setinputValue(e.target.value)
}

  const columns = [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: (text, record) =>
      editingKey === record._id? (
        <Input value={editedTask}
               onChange={(e)=>setEditedTask(e.target.value)}
        />
      ):(
        <span>{text}</span>
      )
  },
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
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
      editingKey ===record._id ? (
        <Space size="middle">
          <a onClick={() => handleUpdate(record)}>Update</a>
          <a onClick={handleCancel}>Cancel</a>
        </Space>
      ) : (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record)}>Delete</a>
        </Space>
      )
    ),
  },
];
const data = [];
    return (
    <>
      <Table columns={columns} dataSource={race} />
      <Space direction="vertical" size="large">
      <Space.Compact
      style={{
        width: '100%',
      }}
      >
      <Input placeholder="new task" 
             id='newTaskInput'
             style={{
              width:'100%'
             }}
             value={inputValue}
             onChange={handleInputChange}
      />
      <Button onClick={newTask} type="primary">Submit</Button>
      </Space.Compact>
      </Space>
    </> 
    )

} 
export default Tables;