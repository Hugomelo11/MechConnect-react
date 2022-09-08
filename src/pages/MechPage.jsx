import { useEffect, useState } from "react";
import React from "react";
import Vehicle from "../components/Vehicle";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "../styles/MechPage.css";

const { Header, Sider, Content } = Layout;

export default function MechPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [allVehicles, setAllVehicles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/vehicles")
      .then((response) => response.json())
      .then((data) => setAllVehicles(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[UserOutlined, UserOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            })
          )}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {allVehicles.map((vehicle) => {
            return <Vehicle key={vehicle._id} vehicle={vehicle} />;
          })}
        </Content>
      </Layout>
    </Layout>
  );
}
