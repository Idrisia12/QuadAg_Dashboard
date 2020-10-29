import React from "react";
import "./editProfile.css";
import {
     TwitterOutlined,
     FacebookOutlined,
     LinkedinOutlined
} from '@ant-design/icons';

import { Form, Input, Button } from "antd";
import { Typography } from 'antd';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const SeeaDoctor = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <div>

       <Title level={2} style={{ textAlign: 'center'}}>Contact Us</Title>
       <p style={{ textAlign: 'center'}}>You can reach us via the following channels.<span style={{ color: "#32be8f" }}>We will try to reply as soon as possible</span></p>

       <Form {...layout} name="nest-messages" onFinish={onFinish}>
            <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} rules={[{ type: 'email', required: true}]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Message">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Get in Touch
              </Button>
            </Form.Item>
          </Form>

          <Title level={4} style={{ textAlign: 'center', color: '#32be8f'}}>Office Address</Title>
          <p style={{ textAlign: 'center'}}>Lagos, Nigeria</p>

          <Title level={4} style={{ textAlign: 'center', color: '#32be8f'}}>Connect With Us</Title>
          <div style={{ textAlign: "center"}}>
            <a href="https://twitter.com/home"><TwitterOutlined /></a>
            <a href="https://www.nairaland.com/"><FacebookOutlined /></a>
            <a href="https://www.nairaland.com/"><LinkedinOutlined /></a>
            </div>
    </div>
  );
};

export default SeeaDoctor;
