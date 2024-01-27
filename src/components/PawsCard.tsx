import React, { FC } from "react";
import classNames from "classnames";
import logo2 from "../Img/logo2.png";
import styles from "./card.module.css";
import { Card } from "react-bootstrap";

interface PawsCardProps {
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

export const PawsCard: FC<PawsCardProps> = ({
  image,
  title,
  text,
  buttonText,
  buttonLink,
  buttonStyle = ButtonStyle.Success,
}) => (
  <Card className={classNames("card", styles.pawsCard)}>
    {image && (
      <Card.Img
        src={image}
        className={classNames("card-img-top", styles.pawsCardImg)}
        alt="..."
      />
    )}
    {!image && (
      <Card.Img
        src={logo2}
        className={classNames(
          "card-img-top",
          styles.pawsCardImg,
          styles.desaturated
        )}
        alt="..."
      />
    )}
    <Card.Body>
      <Card.Title className={classNames(styles.pawsCardTitle)}>
        {title}
      </Card.Title>

      <Card.Text className={classNames(styles.pawsCardText)}>{text}</Card.Text>
    </Card.Body>

    {buttonText && buttonLink && (
      <Card.Body>
        <Card.Link
          href={buttonLink}
          className={classNames("btn", buttonStyle, "pin-button")}
        >
          {buttonText}
        </Card.Link>
      </Card.Body>
    )}
  </Card>
);
