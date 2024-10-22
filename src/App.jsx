import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import { Layout, Typography } from 'antd';
import AppHeader from './components/AppHeader';
import Test from './components/Test.jsx'
import Tables from './components/Tables';
import { useNavigate } from 'react-router-dom';


const { Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const navigate = useNavigate()

  const onLogin = ()=>{
    try {
     // await login()
     setisLoggedIn(true)
     navigate({
      pathname:'/login'
     })
    } catch (error) {
      
    }
  }
  const onLogout = ()=>{
    try {
      setisLoggedIn(false)
      console.log(isLoggedIn)
      navigate({
        pathname:'/login',
        
      })
    } catch (error) {
      
    }
  }
  return (
    
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sidebar */}
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="logo" />
          <Sidebar />
        </Sider>
        {/* Main content */}
        <Layout className="site-layout">
          {/* Header */}
          <AppHeader
            isLoggedIn={isLoggedIn}
            onLogin={onLogin}
            onLogout={onLogout}
          />
          {/* Content */}
          <Content style={{ margin: '24px 16px 0' }}>
            <Tables />
          <Test/>
          </Content>
          {/* Footer */}
          <Footer style={{ textAlign: 'center' }}>
            Ant Design © {new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
   
  );
};

export default App;