import React, { useContext } from 'react';
import { Layout, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../assets/logo.jpg'

const { Header } = Layout;

const AppHeader = ({isLoggedIn, onLogin, onLogout}) => {
 
  return (
    <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo */}
        <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Muhammad's To Do List Web </span>
      </div>
      <div>
        {/* Conditional rendering of login/logout buttons */}
        {isLoggedIn ? (
          <Button onClick={onLogout} type="primary">Logout</Button>
        ) : (
          <Button onClick={onLogin} type="primary" icon={<UserOutlined />}>Login</Button>
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
