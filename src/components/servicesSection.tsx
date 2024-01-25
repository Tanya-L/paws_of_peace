import React from "react";
import { Card } from "./Card";
import needHelp from "../Img/donate/needHelp.png";
import dogfood from "../Img/donate/dogfood.png";
import swishNUF from "../Img/donate/swishNUF.png";
import "../App.module.css";

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
          buttonLink={"/needHelp"}
        />
      </div>
      <div className="col">
        <Card
          image={dogfood}
          title={"Help Ukrainian animal shelters now!"}
          text={
            "Got some extra pet food or supplies laying around? Donate them to a shelter in Ukraine!"
          }
          buttonText={"Donate food or supplies"}
          buttonLink={"/donateFood"}
        />
      </div>
      <div className="col">
        <Card
          image={swishNUF}
          title={"Donate, Save Lives!"}
          text={"Want to help with a money? Donate to Paws of Peace today!"}
          buttonText={"Donate Money"}
          buttonLink={"/donateMoney"}
        />
      </div>
    </div>
  </div>
);
