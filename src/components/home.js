import React from "react";
import "./home.css"
import logo from "../components/account.jpg";
import invest from "../components/invest.jpg";
import { Typography } from 'antd';
import { Card, Col} from "antd";

const { Title } = Typography;

const Home = () => {
  return (
      <div>

           <Title level={3} style={{ color: ' #32be8f', fontFamily: 'Open Sans'}}>Hello Idris!</Title>

      <div id="inlineExample">
<article>
    <img
      src={logo}
      alt="Logo"
      />
</article>
<article>
<img
  src={invest}
  alt="invest"
  />
</article>
</div>

      <Title level={3} style={{ textAlign: 'center', color: ' #32be8f', marginTop: '10px', fontFamily: 'Open Sans'}}>Recent Activities</Title>

      <Col span={16}>
        <Card title="All Time" bordered={false}>
          No Recent Activities
        </Card>
      </Col>
      </div>
  );
};

export default Home;
