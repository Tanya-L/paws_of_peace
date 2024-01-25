import React, { FC } from "react";
import map from "../../Img/map.png";
import styles from "./Main.module.css";

export const PawsMap = () => (
  <>
    <iframe
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
  </>
);

interface PawsMapImageProps {
  floatSmall: boolean;
}

export const PawsMapImage: FC<PawsMapImageProps> = ({ floatSmall }) => {
  if (floatSmall) {
    return (
      <img
        src={map}
        alt="Paws of Peace location"
        width="40%"
        className={styles.floatRight}
      />
    );
  }
  return <img src={map} alt="Paws of Peace location" width="100%" />;
};
