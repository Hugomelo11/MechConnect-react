// import { Button, Modal} from "antd";
import { useState } from "react";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-img-container">
          <img
            src="./Logos/mecHero.jpeg"
            alt="hero visual"
            className="hero-img"
          />
        </div>
        <div className="hero-text-container">
          <h1 className="hero-h2">
            VEHICLE SERVICE AND REPAIRS <b>DELIVERED</b>
          </h1>
          <h3 className="hero-h3">
            Service at your home or office · 24/7 Online Booking · Quality Service Guaranteed
          </h3>
        </div>
      </div>
    </>
  );
}
