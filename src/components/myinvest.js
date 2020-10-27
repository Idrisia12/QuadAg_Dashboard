import React from "react";

import { Button, Typography, Card, Col } from "antd";
const { Title } = Typography;

const App = () => {
  return (
      <div style={{ textAlign: 'center' }}>

            <Title level={3} style={{ textAlign: 'center', color: '#32be8f'}}>Start Investing</Title>
            <p style={{ textAlign: 'center' }}>Start investing in verified opportunities. Let's help you get started.</p>

        <Button type="primary" htmlType="submit">
          Invest!!!
        </Button> <br />
        <Button type="primary" htmlType="submit">
          Learn More
        </Button>

        <Col span={16}>
          <Card title="All Time" bordered={false}>
            No Investments
          </Card>
        </Col>
      </div>
  );
};

export default App;
