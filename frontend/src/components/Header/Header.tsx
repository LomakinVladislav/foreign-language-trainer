import React from 'react';
import { Layout, Menu, ConfigProvider, Switch, MenuProps} from 'antd';
import {
  UserOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';


type HeaderProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};


const { Header} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <UserOutlined />, label: 'Профиль' },
  { key: '2', icon: <PlusCircleOutlined />, label: 'Создать' },
]
const HeaderComponent = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  return (
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: 0, // Без этого свойства с width: 100% элемент не помещается в рамки родителя
        }}
      >
      <ConfigProvider theme={{}}>
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        checkedChildren="🌙"
        unCheckedChildren="☀️"
      /> 
      </ConfigProvider>
        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, flexDirection: `row-reverse` , minWidth: 0}}
        />
      </Header>
  );
};

export default HeaderComponent;