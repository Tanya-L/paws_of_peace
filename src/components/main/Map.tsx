import React, { FC } from "react";
import map from "../../Img/map.png";
import styles from "./Main.module.css";

export const Map = () => (
  <>
    <iframe
      className="mt-1"
      width="100%"
      height="350"
      src="https://www.openstreetmap.org/export/embed.html?bbox=18.048208951950077%2C59.349312133306896%2C18.05640578269959%2C59.35294921548818&amp;layer=mapnik&amp;marker=59.35113345775011%2C18.052307198870494"
      style={{ border: "1px solid black" }}
    ></iframe>
    <br />
    <small>
      <a href="https://www.openstreetmap.org/?mlat=59.35113&amp;mlon=18.05231#map=17/59.35113/18.05231">
        View Larger Map
      </a>
    </small>

    {/*<div className="container text-center">*/}
    {/*  <iframe*/}
    {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.9319460839704!2d18.05064343155672!3d59.350783795347844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9dc7a7492c15%3A0x5652629a8ef134f8!2sPaws%20Of%20Peace!5e0!3m2!1sen!2sse!4v1685167710001!5m2!1sen!2sse"*/}
    {/*    width="600"*/}
    {/*    height="450"*/}
    {/*    loading="lazy"*/}
    {/*    referrerPolicy="no-referrer-when-downgrade"*/}
    {/*  ></iframe>*/}
    {/*</div>*/}
  </>
);

export const MapImage = () => {
  return <img src={map} alt="Paws of Peace location" width="100%" />;
};
