import React from "react";
import { Card } from "./Card";
import needHelp from "../Img/donate/needHelp.png";
import donateFood from "../Img/donate/donateFood.png";
import swishNUF from "../Img/donate/swishNUF.png";
import "../App.css";

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
          buttonLink={"/donateFood"}
        />
      </div>
      <div className="col">
        <Card
          image={swishNUF}
          title={"Donate Coins, Save Lives!"}
          text={"Want to help with a coin? Donate to Paws of Peace today!"}
          buttonText={"Donate Money"}
          buttonLink={"/donateMoney"}
        />
      </div>
    </div>
  </div>
);
