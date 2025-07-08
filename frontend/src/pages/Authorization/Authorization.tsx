import React from "react";
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Switch, Layout } from 'antd';
import styles from "./Authorization.module.css"

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

type AuthorizationProps = {
    isDarkMode: boolean;
    toggleTheme: () => void;
  };
  

const Authorization: React.FC<AuthorizationProps> = ({ isDarkMode, toggleTheme }) => {
    return (
    <Layout style={{ height: "100vh" }}>
        <div className={styles.themeToggle}>
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          checkedChildren="🌙"
          unCheckedChildren="☀️"
        />
        </div>
      
        <div className={styles.authorizationContainer}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<FieldType> name="remember" label={null}>
                <Checkbox>Remember me</Checkbox>    
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    </Layout>
)};

export default Authorization;