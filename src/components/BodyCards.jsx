import { Card, Col, Row } from "antd";
import React from "react";
const { Meta } = Card;

export const BodyCard = () => (
  <div className="body-cards">
    <Row gutter={100}>
      <Col span={8}>
        <Card
          hoverable
          style={{
            width: 240,
            border: 0,
          }}
          cover={
            <img
              alt="example"
              src="./Logos/DestinationLogi.webp"
            />
          }
        >
          <Meta
            title="We Make It Easy"
            description="Book a Service online 24/7. Our mechanics will come to your home or office, 7 days a week"
          />
  

        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{
            width: 240,
            border: 0,
          }}
          cover={
            <img
              alt="example"
              src="./Logos/wrenches.webp"
            />
          }
        >
          <Meta
            title="Maintenance and Repair"
            description="On-the-spot diagnosis, fair and transparent pricing. Either routine maintenance or large repairs, we got you covered."
          />
        </Card>
     
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{
            width: 240,
            border: 0,
            
          }}
          cover={
            <img
              alt="example"
              src="./Logos/iconshield.webp"
            />
          }
        >
          <Meta
            title="Quality Guarantee"
            description="All services backed by 12 month / 12,000 mile warranty."
          />
        </Card>
      </Col>
    </Row>
  </div>
);
