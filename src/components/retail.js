import React from "react";
import "./editProfile.css";
import {
       ArrowRightOutlined
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

       <Title level={2} style={{ textAlign: 'center'}}>Retail Program</Title>
       <p style={{ textAlign: 'center', color: '#32be8f'}}>Fill the Form Below</p>

       <Form {...layout} name="nest-messages" onFinish={onFinish}>
            <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} rules={[{ type: 'email', required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'phone']} rules={[{ type: 'phone' }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'produce']} rules={[{ type: 'name' }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'produce']} rules={[{ type: 'weight' }]}>
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Request a Quote <ArrowRightOutlined />
              </Button>
            </Form.Item>
          </Form>

    </div>
  );
};

export default SeeaDoctor;
