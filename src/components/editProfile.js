import React from "react";
import "./editProfile.css";

import { Form, Input, Button, Upload } from "antd";
import { Typography } from 'antd';
import { InboxOutlined } from "@ant-design/icons";

const { Title } = Typography;

const SeeaDoctor = () => {
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <div>

       <Title level={2} style={{ textAlign: 'center'}}>Basic Data</Title>

      <Form.Item label="First Name">
        <Input placeholder="Nigeria" />
      </Form.Item>

      <Form.Item label="Last Name">
        <Input placeholder="Peace" />
      </Form.Item>

      <Form.Item label="Email">
        <Input placeholder="Abdul*****@hmail.com" />
      </Form.Item>

      <Form.Item label="Phone Number">
        <Input placeholder="0803*7*9*2*" />
      </Form.Item>

      <Form.Item label="Country">
        <Input placeholder="Nigeria" />
      </Form.Item>

      <Form.Item label="Upload Image">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item style={{ textAlign: 'center' }}>
        <Button type="primary" style={{ borderRadius: 20, textAlign: 'center', width: 150 }}>SUBMIT</Button>

      </Form.Item>
    </div>
  );
};

export default SeeaDoctor;
