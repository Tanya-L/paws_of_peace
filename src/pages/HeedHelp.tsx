import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Card } from "../components/Card";
import secondHelp from "../Img/donate/secondHelp.png";
import needHelp from "../Img/donate/needHelp.png";

function HeedHelp() {
  return (
    <div className="container">
      <Header activeItem="needHelp" />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Card
              image={needHelp}
              title={"Потрібна допомога?"}
              text={
                "Заповніть цю форму, і ми зробимо все можливе, щоб допомогти вам! ПЕРШЕ ЗВЕРНЕННЯ!!!!"
              }
              buttonText={"Заповнити форму"}
              buttonLink={"https://forms.gle/TepTjSrgbSpELcv66"}
            />
          </div>
          <div className="col">
            <Card
              image={secondHelp}
              title={"Знову потрібна допомога?"}
              text={
                "Потребуете ПОВТОРНОi ДОПОМОГИ? Заповніть цю форму, і ми зробимо все можливе, щоб допомогти вам! "
              }
              buttonText={"Заповнити форму"}
              buttonLink={"https://forms.gle/TCMFJPBTPqFLbakz9"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { HeedHelp };
