import React, { useContext, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {useNavigate, createSearchParams} from 'react-router-dom';
import {login} from './api/auth.js'; 



const Login = () => {
    const navigate = useNavigate();
    
    const goToTasks = () =>
        navigate({
        pathname: '/tasks',
        //search: `?${createSearchParams({category_id: 1})}`,
    });
    const onFinish = async (values) => {
        await login(values)
          .then((res) => {
                
                //console.log(res.data.user.name, 'res in await');
                const user = res.data.user;
                const token = res.data.token;
                localStorage.setItem('user',JSON.stringify(user));
                localStorage.setItem('token',JSON.stringify(token));
                goToTasks();
                // navigateTo(`/task/${userName}`)
          })
          .catch((err)=>{
            console.log(err)
          })
        
      };
    
  
    return(
    <div style={{
        display:'flex',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center'
                }}>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit" >
                Submit
            </Button>
            </Form.Item>
        </Form>
    </div>
)};
export default Login;

