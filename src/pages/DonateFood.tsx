import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import UnderConstraction from "../Img/Under-Construction.png";

function DonateFood() {
  return (
    <div className="container">
      <Header activeItem="donateFood" />
      <div>
        <div className="container text-center">
          <h1>Donate food or/and supplies to Paws of Peace</h1>
          <div className="text-start p-4">
            We welcome donations of
            <ul>
              <li>animal food 🐾 (new, open, slightly expired)</li>
              <li>cages</li> <li>pet blankets</li> <li>toys (old, new)</li>{" "}
              <li>medications (deworming, medical collars, etc.)</li>
            </ul>
            <p className="fw-bold m-1">
              You can bring your donations to Stockholm, Sveavägen 162, on
              Sundays from 14:00 to 18:00 OR contact us to arrange a pick-up.
            </p>
            <h4 className="text-danger text-center p-5">
              100% of your donation goes towards aiding to help animals in
              war-affected zones of Ukraine.
            </h4>
            <p>
              ❓ If you have any questions, please don't hesitate to send us a
              message.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { DonateFood };
