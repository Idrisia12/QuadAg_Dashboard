import React from "react";
import "./profile.css";
import beans from "../components/beans.jpg";
import { Typography, Button } from 'antd';

import { Card, Col, Row } from "antd";
const { Title } = Typography;

class App extends React.Component {
  render() {
    return (
      <div className="App">

          <Title level={2} style={{ textAlign: 'center', color: '#32be8f'}}>Available Investments</Title>

        <div className="site-card-wrapper">
          <Row gutter={16} className="card-container">
            <Col span={16}>
              <Card title=<img
                src={beans}
                width="150"
                alt="Beans"
                />
                 bordered={false}>
                    <Title level={2} style={{color: '#32be8f'}}>Akins Beans Farm</Title>
                  <p>Profit to be Shared</p>
                  <p>Investors: 0</p>
                  <Title level={5}>#5, 000</Title>
                  <Button type="primary" htmlType="submit">
                    INVEST
                  </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
