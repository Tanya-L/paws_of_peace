import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Maps from "../Img/maps.png";

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
            <p>
              ❓ If you have any questions, please don't hesitate to send us a
              message.
            </p>
            <div className="container text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.9319460839704!2d18.05064343155672!3d59.350783795347844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9dc7a7492c15%3A0x5652629a8ef134f8!2sPaws%20Of%20Peace!5e0!3m2!1sen!2sse!4v1685167710001!5m2!1sen!2sse"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/*<img src={Maps} />*/}
            </div>
            <h4 className="text-danger text-center p-5">
              100% of your donation goes towards aiding to help animals in
              war-affected zones of Ukraine.
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { DonateFood };
