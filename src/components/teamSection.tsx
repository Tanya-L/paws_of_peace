import React from "react";
import { Card } from "./Card";
import logo2 from "../Img/logo2.png";
import logo from "../Img/logo.png";
import Tanya from "../Img/teamPhoto/Tanya.png";
import TanyaK from "../Img/teamPhoto/TanyaK.png";
import Uliana from "../Img/teamPhoto/Uliana.png";
import Karina from "../Img/teamPhoto/Karina.png";
import Julia from "../Img/teamPhoto/Julia.png";

export const TeamSection = () => {
  return (
    <div className="container">
      <div>
        <div className="container text-center">
          <h1>Active Team Paws of Peace</h1>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <Card
                  image={Tanya}
                  title={"Tanya Lytovchenko"}
                  text={"Co-Founder Paws of Peace"}
                  buttonText={"Contact Tanya"}
                  buttonLink={"https://www.linkedin.com/in/tanyalytovchenko/"}
                />
              </div>
              <div className="col">
                <Card
                  image={Karina}
                  title={"Karina SH"}
                  text={"Co-Founder Paws of Peace"}
                  buttonText={"Contact Karina"}
                  buttonLink={"https://www.linkedin.com/in/karina-shyrokykh/"}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Card
                  image={Uliana}
                  title={"Uliana Kostiv"}
                  text={"Volunteer"}
                  buttonText={"Contact Uliana"}
                  buttonLink={
                    "https://www.linkedin.com/in/uliana-kostiv-%F0%9F%87%BA%F0%9F%87%A6-681b14148/?trk=public_profile_browsemap&originalSubdomain=se"
                  }
                />
              </div>
              <div className="col">
                <Card
                  image={TanyaK}
                  title={"Tanya Kozorez"}
                  text={"Volunteer"}
                  buttonText={"Contact Tanya Kozorez"}
                  buttonLink={
                    "https://www.linkedin.com/in/tetiana-kozoriz-support/"
                  }
                />
              </div>
              <div className="col">
                <Card
                  image={Julia}
                  title={"Julia A"}
                  text={"Volunteer"}
                  buttonText={"Contact Julia"}
                  buttonLink={"https://www.linkedin.com/in/julia-ah/"}
                />
              </div>
            </div>
            <div className="container text-center ">
              <div className="row bg-light main">
                <h1>Becoming a volunteer in Paws of Peace</h1>
                <div className="col">
                  <Card
                    image={logo}
                    title={"Do you want to join?"}
                    buttonText={"Contact us"}
                    buttonLink={"https://forms.gle/19He16iWwyUtJ8Dm9"}
                  />
                </div>
              </div>
              <h1>Supporters of Paws of Peace</h1>
              <div className="container text-center">
                <div className="row gray">
                  <div className="col">
                    <Card
                      image={logo2}
                      title={"Zane Neikena"}
                      text={"Co-Founder Paws of Peace, supporter"}
                    />
                  </div>
                  <div className="col">
                    <Card
                      image={logo2}
                      title={"Dmytro Lytovchenko"}
                      text={"Supporter"}
                    />
                  </div>
                  <div className="col">
                    <Card
                      image={logo2}
                      title={"Nikolay Kotov"}
                      text={"Supporter"}
                    />
                  </div>
                  <div className="col">
                    <Card
                      image={logo2}
                      title={"Max Giryk"}
                      text={"Supporter"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
