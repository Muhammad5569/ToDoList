import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import { Layout, Typography } from 'antd';
import AppHeader from './components/AppHeader';
// import { Button, Layout, Menu, theme } from 'antd';

import Tables from './components/Tables';
import UserInput from './components/UserInput';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

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
        <AppHeader/>
        {/* Content */}
        <Content style={{ margin: '24px 16px 0' }}>
          <Tables />
          <UserInput />
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



// import React,{useState} from 'react';
// import Sidebar from './components/sidebar';


// import { Button, Layout, Menu, theme } from 'antd';
// import Tables from './components/Tables.jsx';
// import UserInput from './components/UserInput';

// const { Header, Content, Footer } = Layout;
// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <>
//     <Layout>
//     <Header
//           style={{
//             padding: 0,
//             display: 'block',
//             background: colorBgContainer,
//           }}
//         >
//           <div>Header bar navigation part</div>
//         </Header>
//       <Sidebar />
//       <Layout>
//         <Content
//             style={{
//               margin: '24px 16px 0',
//             }}
//           >
//           <Tables/>  
//           <UserInput/>
//         </Content>
        
//       </Layout>
//       <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Ant Design ©{new Date().getFullYear()} Created by Ant UED
//       </Footer>
//     </Layout>
    
//     </>
//   );
// };
// export default App;