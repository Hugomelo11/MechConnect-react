import { useEffect, useState } from "react";
import React from "react";
import Vehicle from "../components/Vehicle";
import { Layout, Menu } from "antd";
import "../styles/MechPage.css";

const { Header, Sider, Content } = Layout;

export default function MechPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [allVehicles, setAllVehicles] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch("https://mechconnectapi.web.app/vehicles")
      .then((response) => response.json())
      .then((data) => {
        setAllVehicles(data);
        console.log({ data });
        setSelectedIndex(1);
      })
      .catch((err) => console.error(err));
  }, [setAllVehicles]);

  return (
    <Layout>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      >

      </Header>

      <Layout className="site-layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["0"]}>
            {allVehicles.map((vehicle, index) => {
              const _thisIndex = index;
              return (
                <Menu.Item
                  key={index}
                  onClick={() => setSelectedIndex(_thisIndex + 1)}
                >
                  {vehicle.info.FirstName} {vehicle.info.LastName}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {allVehicles && selectedIndex && (
            <Vehicle vehicle={allVehicles[selectedIndex - 1]} />
          )}
        </Content>
      </Layout>
    </Layout>
  );
}
