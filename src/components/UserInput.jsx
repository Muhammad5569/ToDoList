import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';
const { Search } = Input;
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];
const UserInput = () => (
  <Space direction="vertical" size="middle">
    <Space.Compact
      style={{
        width: '100%',
      }}
    >
      <Input defaultValue="Combine input and button" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
  </Space>
);
export default UserInput;