import React from "react";
import cat3 from "../Img/cat3.png";
import dog from "../Img/dog.png";
import "../App.css";

export const MainSection = () => (
  <div className="container text-center bg-light main">
    <div className="row">
      <div className="col-8">
        <div>
          <h1>We help animals in Ukraine</h1>
          <h4>Our mission</h4>
          <div>
            We support animal sterilization and vaccination projects in Ukraine,
            and also help provide homeless and abandoned animals with food and
            medical treatment.
          </div>
          <div>
            <p>
              Join Paws of Peace in supporting animal shelters in Ukraine by
              donating pet food, pet care products, or money to help us make a
              difference.
            </p>
            <h3>About Paws of Peace</h3>
            <div className="text-start">
              We are a nonprofit organization based in Sweden dedicated to
              making a positive impact on animal welfare in Ukraine. Our primary
              focus is on collecting donations, including financial support, pet
              food, and pet care products, which are then sent to Ukraine. Our
              goal is to distribute these donations among animal shelters in
              Ukraine that are in need of assistance. Our team works tirelessly
              to ensure that the donations we receive are utilized in the most
              effective manner possible. We carefully evaluate the needs of the
              shelters and strive to allocate resources where they will have the
              greatest impact. At the core of our mission is the belief that
              every animal deserves a safe and loving home. We are passionately
              committed to turning this belief into a reality. Together, we can
              make a significant difference in the lives of these animals.
            </div>
            <h3>How can you help?</h3>
            <p>
              You can donate pet food and supplies by sending them to our
              address in <b>Stockholm, Sveavägen 162B, Sundays 2-6pm.</b> You
              can donate money by sending a Swish payment to our{" "}
              <b>Swish number 123 437 52 83.</b>
              You can also donate money by sending a bank transfer to our bank
              account.
            </p>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="p-4">
          <img src={cat3} width="100%" />
        </div>
        <div className="p-4">
          <img src={dog} width="100%" />
        </div>
      </div>
    </div>
  </div>
);
