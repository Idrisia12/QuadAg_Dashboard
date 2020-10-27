import React from "react";
import "./password.css";

import { Form, Input, Button, Typography } from "antd";
const { Title } = Typography;

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const App = () => {
  return (
      <div>

            <Title level={2} style={{ textAlign: 'center'}}>Change Password</Title>

        <Form.Item
        label="Old Password"
        name="oldPassword"
        rules={[
          {
            required: true,
            message: "Please input your old password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="New Password"
        name="newPassword"
        rules={[
          {
            required: true,
            message: "Please input your new password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm New Password"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Please confirm your new password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </div>
  );
};

export default App;
