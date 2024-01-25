import React, { FC } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface CardProps {
  image: string;
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
  <div className="card" style={{ width: "100%" }}>
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
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
);
