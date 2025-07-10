import { Layout, Menu, Switch} from 'antd';
import { useMenu } from '../../contexts/MenuContext';
import { UserOutlined, PlusCircleOutlined } from '@ant-design/icons';
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom';


type HeaderProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const { Header} = Layout;

const HeaderComponent = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  const navigate = useNavigate();
  const { activeMenuKey, setActiveMenuKey } = useMenu();

  const handleMenuClick = (key: string, path: string) => {
    setActiveMenuKey(key);
    navigate(path);
  };

  const items = [
    {
      key: 'header-profile',
      icon: <UserOutlined />,
      label: 'Профиль',
      onClick: () => handleMenuClick('header-profile', '/profile')
    },
    {
      key: 'header-create',
      icon: <PlusCircleOutlined />,
      label: 'Создать',
      onClick: () => handleMenuClick('header-create', '/deck_creation')
    }
  ];
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
      <div className={`${styles.switchContainer} ${
        isDarkMode ? styles.switchContainerDark : styles.switchContainerLight
      }`}>
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          checkedChildren="🌙"
          unCheckedChildren="☀️"
        /> 
      </div>
        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          selectedKeys={activeMenuKey ? [activeMenuKey] : []}
          style={{ flex: 1, flexDirection: `row-reverse` , minWidth: 0}}
        />
      </Header>
  );
};

export default HeaderComponent;