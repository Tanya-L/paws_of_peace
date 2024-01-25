import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import { PawsMap } from "../components/main/pawsMap";

const DonateFood = () => (
  <>
    <Header activeItem="donateFood" />
    <div>
      <div className="container text-center">
        <h1>Donate food or/and supplies to Paws of Peace</h1>
        <div className="text-start p-4">
          We welcome donations of
          <ul>
            <li>animal food 🐾 (new, open, slightly expired)</li>
            <li>cages</li>
            <li>pet blankets</li>
            <li>toys (old, new)</li>{" "}
            <li>medications (deworming, medical collars, etc.)</li>
          </ul>
          <p className="fw-bold m-1">
            You can bring your donations to Stockholm, Sveavägen 162, on Sundays
            from 14:00 to 18:00 OR contact us to arrange a pick-up.
          </p>
          <p>
            ❓ If you have any questions, please don't hesitate to send us a
            message.
          </p>
          <PawsMap />
          <h4 className="text-danger text-center p-5">
            100% of your donation goes towards aiding to help animals in
            war-affected zones of Ukraine.
          </h4>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export { DonateFood };
