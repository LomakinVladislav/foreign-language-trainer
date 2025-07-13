import { Layout, Menu, Switch} from 'antd';
import { useMenu } from '../../contexts/MenuContext';
import { UserOutlined, PlusCircleOutlined, SettingOutlined, LogoutOutlined  } from '@ant-design/icons';
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

  const handleNavigation = (key: string, path: string) => {
    setActiveMenuKey(key);
    navigate(path);
  };

  const items = [
    {
      key: 'header-profile',
      icon: <UserOutlined />,
      label: 'Профиль',
      children: [
        { 
          key: 'header-profile-settings', 
          icon: <SettingOutlined />, 
          label: 'Настройки',
          onClick: () => handleNavigation('header-profile', '/settings'),
        },
        { 
          key: 'header-profile-quit', 
          icon: <LogoutOutlined />, 
          label: 'Выйти',
          onClick: () => {
            localStorage.removeItem('access_token');
            navigate('/auth');
            return;
          }
        },
      ],
    },
    {
      key: 'header-create',
      icon: <PlusCircleOutlined />,
      label: 'Создать',
      onClick: () => handleNavigation('header-create', '/deck_creation')
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

      <div 
        className={`${styles.logoContainer} ${
          isDarkMode ? styles.logoContainerDark : styles.logoContainerLight
        }`}
        onClick={() => handleNavigation('sidebar-home', '/main')}
      >
        <span className={styles.logoText}>Language Trainer</span>
      </div>

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