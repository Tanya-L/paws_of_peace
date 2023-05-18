import React from "react";
import { Card } from "./Card";
import gerb2 from "../Img/partners/gerb.png";
import hundstallet from "../Img/partners/hundstallet.png";
import kattstallet from "../Img/partners/kattstallet.png";
import nuf from "../Img/partners/nuf.png";
import hub from "../Img/partners/hub.png";
import PoPquestion from "../Img/PoPquestion.png";

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
            buttonText={"Nordic Ukraine Forum"}
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
      </div>
      <div className="row">
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
        <div className="col">
          <Card
            image={PoPquestion}
            buttonText={"Do you want to become our partner? Contact us!"}
            buttonLink={"/contact"}
          />
        </div>
      </div>
    </div>
  </div>
);
