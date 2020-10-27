import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingFilled,
  HomeFilled,
  MoneyCollectFilled,
  LogoutOutlined,
  PoundCircleFilled,
  DownOutlined
} from '@ant-design/icons';

import Home from "./components/home";
import Profile from "./components/profile";
import EditProfile from "./components/editProfile";
import Retail from "./components/retail";
import MyInvest from "./components/myinvest";
import Invest from "./components/invest";
import Buy from "./components/buy";
import ChangePassword from "./components/password";
import Contact from "./components/contact";

import { Dropdown } from "antd";
const { Header, Sider, Content } = Layout;

class App extends React.Component {

  constructor() {
 super();

 this.state = {
   tabNavigations: {
     home: true,
     profile: false,
     editProfile: false,
     retail: false,
     myinvest: false,
     invest: false,
     buy: false,
     password: false,
     contact: false
   },
 };

 this.handleClick = this.handleClick.bind(this);
}

handleClick(e) {
 e.preventDefault();
 let copyState = { ...this.state.tabNavigations };
 for (let key in copyState) {
   if (key === e.target.value) {
     copyState[key] = true;
   } else {
     copyState[key] = false;
   }
 }

 this.setState({
   tabNavigations: copyState,
 });
}


  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {

    const profileMenu = (
   <Menu>
     <Menu.Item>
       <button onClick={this.handleClick} value="profile">
         View Profile
       </button>
     </Menu.Item>
     <Menu.Item>
       <button onClick={this.handleClick} value="editProfile">
         Edit Profile
       </button>
     </Menu.Item>
   </Menu>
 );

 const investsMenu = (
<Menu>
  <Menu.Item>
    <button onClick={this.handleClick} value="myinvest">
      My Investments
    </button>
  </Menu.Item>
  <Menu.Item>
    <button onClick={this.handleClick} value="invest">
      Investments
    </button>
  </Menu.Item>
</Menu>
);


    const settingsMenu = (
   <Menu>
     <Menu.Item>
       <button onClick={this.handleClick} value="card">
         Card and Bank Settings
       </button>
     </Menu.Item>
     <Menu.Item>
       <button onClick={this.handleClick} value="password">
         Change Password
       </button>
     </Menu.Item>
     <Menu.Item>
       <button onClick={this.handleClick} value="contact">
         Contact Us
       </button>
     </Menu.Item>
   </Menu>
 );

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" style= {{color: "#32be8f", textAlign: "center"}} >
               QAG
           </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

            <Menu.Item key="1" icon={<HomeFilled />}>
            <button onClick={this.handleClick} value="home">
              Home
              </button>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                <Dropdown overlay={profileMenu}>
                  <button>
                  Profile <DownOutlined />
                  </button>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="3" icon={<MoneyCollectFilled />}>
                  <Dropdown overlay={investsMenu}>
                    <button>
                    Invest <DownOutlined />
                    </button>
                  </Dropdown>
                </Menu.Item>
            <Menu.Item key="4" icon={<PoundCircleFilled />}>
            <button onClick={this.handleClick} value="retail">
             Retail Program
          </button>
            </Menu.Item>
            <Menu.Item key="5" icon={<PoundCircleFilled />}>
                <button onClick={this.handleClick} value="buy">
              Buy Produce
              </button>
            </Menu.Item>
            <Menu.Item key="6" icon={<SettingFilled />}>
                <Dropdown overlay={settingsMenu}>
                  <button>
                    Settings <DownOutlined />
                  </button>
                </Dropdown>
              </Menu.Item>
            <Menu.Item key="6" icon={<LogoutOutlined />} className="out">
               LogOut
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >

          {this.state.tabNavigations.home ? <Home /> : null}
          {this.state.tabNavigations.profile ? <Profile /> : null}
            {this.state.tabNavigations.editProfile ? <EditProfile /> : null}
            {this.state.tabNavigations.retail ? <Retail /> : null}
            {this.state.tabNavigations.myinvest ? <MyInvest /> : null}
            {this.state.tabNavigations.invest ? <Invest /> : null}
              {this.state.tabNavigations.buy ? <Buy /> : null}
            {this.state.tabNavigations.password ? (
              <ChangePassword />
            ) : null}
            {this.state.tabNavigations.contact ? <Contact /> : null}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
