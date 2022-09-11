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
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </h3>
        </div>
      </div>
    </>
  );
}
