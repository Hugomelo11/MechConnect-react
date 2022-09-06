import { Card } from "antd";
import { Layout } from "antd";
import React from "react";
const { Header, Footer, Sider, Content } = Layout;

const Vehicle = ({ vehicle }) => (
  <>
    <Layout>
      <Layout>
        <Content>
          <Card title="Work Available">
            <Card
              type="inner"
              title="Customer Information"
              extra={<a href="#">More</a>}
            >
              <p>First Name: {vehicle.FirstName}</p>
              <p>Last Name: {vehicle.LastName}</p>
              <p>Make: {vehicle.make}</p>
              <p>Model: {vehicle.model}</p>
              <p>Year: {vehicle.year}</p>
              <p>Service: {vehicle.service}</p>
            </Card>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </>
);

export default Vehicle;

