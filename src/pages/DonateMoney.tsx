import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Card } from "../components/Card";
import swishNUF from "../Img/donate/swishNUF.png";
import BMClogo from "../Img/donate/BMClogo.png";
import BG from "../Img/donate/BG.png";
import PPlogo from "../Img/donate/PPlogo.png";

function DonateMoney() {
  return (
    <div className="container">
      <Header activeItem="donateMoney" />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Card
              image={swishNUF}
              title={"Donate by Swish"}
              text={
                "For donations by Swish, please use the following number: 123 437 52 83. " +
                "Label your donation with the message Paws of Peace. Only for Swedish supporters. Thank you!"
              }
              buttonText={"Swish 123 437 52 83"}
              buttonLink={"https://www.swish.nu/"}
            />
          </div>
          <div className="col">
            <Card
              image={BG}
              title={"BANKGIRO: 280 82 28"}
              text={
                "For donations, please use the following number and label your donation with the message Paws of Peace." +
                " Only for Swedish supporters. Thank you!"
              }
              buttonText={"BANKGIRO: 280 8228 Nordic Ukraine Forum"}
              buttonLink={"https://nuforum.se/support-us/donate/"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card
              image={PPlogo}
              title={"Donate by PayPal!"}
              text={
                "Want to help with a coin? For international supporters. Thank you!"
              }
              buttonText={"Donate by PayPal"}
              buttonLink={
                "https://paypal.me/PawsOfPeace?country.x=SE&locale.x=sv_SE"
              }
            />
          </div>
          <div className="col">
            <Card
              image={BMClogo}
              title={"Donate in our ByMeACoffee fundraiser!"}
              text={
                "Want to help with a coin? For international supporters. Thank you!"
              }
              buttonText={"Donate in ByMeACoffee"}
              buttonLink={"https://www.buymeacoffee.com/TanyaL"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { DonateMoney };
