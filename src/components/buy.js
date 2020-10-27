import React from "react";
import "./profile.css";
import marice from "../components/marice.png";
import { Typography, Button } from 'antd';

import {
       ShoppingCartOutlined
} from '@ant-design/icons';

import { Card, Col, Row } from "antd";
const { Title } = Typography;

class App extends React.Component {
  render() {
    return (
      <div className="App">

          <Title level={2} style={{ textAlign: 'center', color: '#32be8f'}}>Buy Produce</Title>
          <p style={{ textAlign: 'center'}}>Order from any part of the nation and get it delivered to your doorstep</p>

        <div className="site-card-wrapper">
          <Row gutter={16} className="card-container">
            <Col span={16}>
              <Card title=<img
                src={marice}
                width="150"
                />
                 bordered={false}>
                    <Title level={3} style={{color: '#32be8f'}}>50kg MamaGold Rice</Title>

                      <Title level={5} style={{color: '#32be8f'}}>#50, 000</Title>
                      <Button type="primary">
                        Order <ShoppingCartOutlined />
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
