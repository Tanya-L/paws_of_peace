import React from "react";
import catAndDog from "../Img/catAndDog.png";
import "../App.css";

export const MainSection = () => (
  <div className="container text-center bg-light main">
    <div className="row">
      <div className="col-8">
        <div>
          <h1>Helping Ukraine's Animals</h1>
          <div>
            OUR GOAL - We support animal sterilization and vaccination projects
            in Ukraine, and also help provide homeless and abandoned animals
            with food and treatment.
          </div>
          <div>
            <p>
              Join Paws of Peace in supporting animal shelters in Ukraine by
              donating pet food, pet care products, or money to help us make a
              difference.
            </p>
          </div>
        </div>
      </div>
      <div className="col-4">
        <img src={catAndDog} width="100%" />
      </div>
    </div>
  </div>
);
