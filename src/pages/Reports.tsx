import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Facebook from "../Img/contact/fb.png";
import Instagram from "../Img/contact/insta1.png";
import Construction from "../Img/Under-Construction.png";

function Reports() {
  return (
    <div className="container">
      <Header activeItem="reports" />
      <div>
        <div className="container text-center">
          <h1>Our activity reports </h1>
          <div className="text-start p-4">
            <h3>Everyday activity reports</h3>
            <div className="text-start">
              <div className="text-start">
                Everyday activity report in our social media accounts: Facebook
                page
                <a
                  className="text-body-secondary p-1"
                  href="https://www.facebook.com/pawsofpeace"
                >
                  <img src={Facebook} width={32} />
                </a>
                Instagram page
                <a
                  className="text-body-secondary p-1"
                  href="https://www.instagram.com/thepawsofpeace/"
                >
                  <img src={Instagram} className="black-and-white" width={32} />
                </a>
                <p>
                  ❓ If you have any questions, please don't hesitate to send us
                  a message.
                </p>
              </div>
            </div>
            <h3>Monthly activity reports</h3>
            <img src={Construction} alt={""} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export { Reports };
