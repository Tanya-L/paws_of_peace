import React from "react";
import { Card } from "./Card";
import needHelp from "../Img/needHelp.png";
import donateFood from "../Img/donateFood.png";
import swishNUF from "../Img/swishNUF.png";
import "./card.css";

export const ServicesSection = () => (
  <div className="container text-center">
    <div className="row">
      <div className="col">
        <Card
          image={needHelp}
          title={"Потрібна допомога?"}
          text={
            "Заповніть цю форму, і ми зробимо все можливе, щоб допомогти вам! "
          }
          buttonText={"Заповнити форму"}
          buttonLink={"https://forms.gle/TepTjSrgbSpELcv66"}
        />
      </div>
      <div className="col">
        <Card
          image={donateFood}
          title={"Help Ukrainian animal shelters now!"}
          text={
            "Got some extra pet food or supplies laying around? Donate them to a shelter in Ukraine!"
          }
          buttonText={"Donate food or supplies"}
          buttonLink={"#"}
        />
      </div>
      <div className="col">
        <Card
          image={swishNUF}
          title={"Donate Coins, Save Lives!"}
          text={"Want to help with a coin? Donate to Paws of Peace today!"}
          buttonText={"Donate Money"}
          buttonLink={"#"}
        />
      </div>
    </div>
  </div>
);
