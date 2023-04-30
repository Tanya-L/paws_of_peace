import React from "react";
import { Card } from "./Card";
import gerb2 from "../Img/gerb.png";
import hundstallet from "../Img/hundstallet.png";
import kattstallet from "../Img/kattstallet.png";
import nuf from "../Img/nuf.png";
import hub from "../Img/hub.png";

export const PartnersSection = () => (
  <div>
    <div className="container text-center ">
      <h1>Our Partners</h1>
      <div className="row">
        <div className="col" style={{ width: "75%" }}>
          <Card
            image={gerb2}
            buttonText={"Embassy of Ukraine in The Kingdom of Sweden"}
            buttonLink={"https://sweden.mfa.gov.ua/en"}
          />
        </div>
        <div className="col">
          <Card
            image={nuf}
            buttonText={"Nordic-Ukrainian Forum"}
            buttonLink={"https://nuforum.se/"}
          />
        </div>
        <div className="col">
          <Card
            image={hub}
            buttonText={"Ukrainian Volunteer Hub - Stockholm"}
            buttonLink={"https://www.facebook.com/uavhub.stockholm/"}
          />
        </div>
        <div className="col">
          <Card
            image={hundstallet}
            buttonText={"Hundstallet"}
            buttonLink={"https://hundstallet.se/"}
          />
        </div>
        <div className="col">
          <Card
            image={kattstallet}
            buttonText={"Kattstallet"}
            buttonLink={"https://kattstallet.se/"}
          />
        </div>
      </div>
    </div>
  </div>
);
