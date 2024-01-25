import React, { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import logo2 from "../Img/logo2.png";
import styles from "./card.module.css";

interface CardProps {
  image?: string;
  title?: string;
  text?: string | JSX.Element;
  buttonText?: string;
  buttonLink?: string;
  buttonStyle?: ButtonStyle;
}

export enum ButtonStyle {
  Primary = "btn-primary",
  Secondary = "btn-secondary",
  Success = "btn-success",
  Danger = "btn-danger",
  Warning = "btn-warning",
  Info = "btn-info",
  Link = "btn-link",
}

export const Card: FC<CardProps> = ({
  image,
  title,
  text,
  buttonText,
  buttonLink,
  buttonStyle = ButtonStyle.Success,
}) => (
  <div className={classNames("card", styles.pawsCard)}>
    {image && (
      <img
        src={image}
        className={classNames("card-img-top", styles.pawsCardImg)}
        alt="..."
      />
    )}
    {!image && (
      <img
        src={logo2}
        className={classNames(
          "card-img-top",
          styles.pawsCardImg,
          styles.desaturated
        )}
        alt="..."
      />
    )}
    <div className="card-body">
      <h5 className={classNames("card-title", styles.pawsCardTitle)}>
        {title}
      </h5>

      <p className={classNames("card-text", styles.pawsCardText)}>{text}</p>

      <div className="w-100 text-center">
        {buttonText && buttonLink && (
          <Link
            to={buttonLink}
            className={classNames("btn", buttonStyle, "pin-button")}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  </div>
);
