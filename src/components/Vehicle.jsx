import { Card } from "antd";
import { Layout } from "antd";
import React from "react";
const { Content } = Layout;

const Vehicle = ({ vehicle }) => (
  <>
    <Layout>
      <Layout>
        <Content>
          <Card title="Work Available">
            <Card
              type="inner"
              title="Customer Information">
              <p>First Name: {vehicle.info.FirstName}</p>
              <p>Last Name: {vehicle.info.LastName}</p>
              <p>Email: {vehicle.info.Email}</p>
              <p>Address: {vehicle.info.Address}</p>
              <p>Make: {vehicle.info.make}</p>
              <p>Model: {vehicle.info.model}</p>
              <p>Year: {vehicle.info.year}</p>
              <p>Service: {vehicle.info.service}</p>
              <p>Time: {(new Date(vehicle.createdAt).toLocaleDateString())}</p>
            </Card>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </>
);

export default Vehicle;