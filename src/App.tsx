import React, { FC } from 'react';
import PackagePage from "./pages/PackagePage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from './components/Logo';
import About from './pages/About';
import Home from './pages/Home';
//import Header from './components/Header';

import { Button } from 'antd';
import './App.css';

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


function MyRouter() {
  return (
    <Router>
      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/packages/:scope/:name/:version">
          <PackagePage />
        </Route>
        <Route path="/packages/:scope/:name">
          <PackagePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default function App() {
  return (
    <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Logo />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
      <Content style={{ margin: '24px 16px 0' }}>
        <MyRouter />
      </Content>
      <Footer style={{ textAlign: 'center' }}>FTCG ©2020-{new Date().getFullYear()} QHPEA</Footer>
    </Layout>
  </Layout>
  );
}