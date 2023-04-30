import React from "react";

import donation from "../Img/donation.png";

export const FeatureBenefitsSection = () => (
  <div>
    <div className="container text-center bg-light main">
      <div className="row">
        <h4>Feature and Benefits</h4>
        <div className="col">
          <h2>Feature</h2>
          <ul className="text-start">
            <li>
              We are a nonprofit organisation based in Sweden, supporting animal
              shelters in Ukraine.
            </li>
            <li>
              We collect monetary donations, pet food and pet care product
              donations to send to Ukraine.
            </li>
            <li>
              Our aim is to distribute these donations among animal shelters in
              need in Ukraine.
            </li>
            <li>
              We work hard to make sure that the donations we receive are used
              in the most effective way possible.
            </li>
            <li>
              We believe that every animal deserves a safe and loving home, and
              we are committed to making that a reality for as many animals as
              possible.
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Benefits</h2>
          <ul className="text-start">
            <li>
              Helping animals in need by supporting animal shelters in Ukraine
            </li>
            <li>
              Making a positive impact on the lives of abandoned and neglected
              animals
            </li>
            <li>
              Providing much-needed resources such as pet food and care products
              to animal shelters
            </li>
            <li>
              Giving donors the opportunity to make a difference in the lives of
              animals in a meaningful way
            </li>
            <li>
              Promoting awareness and compassion for the welfare of animals
              through our work.
            </li>
          </ul>
        </div>
        <div className="col">
          <img src={donation} width="100%" />
        </div>
      </div>
    </div>
  </div>
);
