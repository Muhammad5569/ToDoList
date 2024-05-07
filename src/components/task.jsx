import React, {useState, useEffect} from 'react';
import { Space, Table} from 'antd';
import {getRace} from '../api/task.js'


const columns = [
    
    {
        title: 'T/r',
        dataIndex: 'id',
        key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_) => (
        <Space size="middle">
          <a>Invite</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

const data = [];
const Tasks = () => {
    const [race, setRace] = useState([]);

    useEffect(()=>{
        const res = getRace()
            .then((val) => {
                console.log('val', val)
                const arr = val.data.data.map((item) => {
                    item.user = 'Test'
                    item.category = 'Category'
                    return item
                })

                setRace(arr)

            })
        // if(res.success) {
        //     console.log('res',res.data);

        //     setRace(res.data)
        // }
        console.log(res)
    },[]);

    return <Table columns={columns} dataSource={race} />
};
export default Tasks;