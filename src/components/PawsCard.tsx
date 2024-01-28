import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import logo2 from "../Img/logo2.png";
import styles from "./PawsCard.module.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface PawsCardProps {
  topImage?: string;
  image?: string;
  title?: string;
  text?: string | ReactNode;
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
  topImage,
  image,
  title,
  text,
  buttonText,
  buttonLink,
  buttonStyle = ButtonStyle.Success,
}) => (
  <Card className={styles.pawsCard}>
    {/* Top image is defined */}
    {topImage && (
      <div className={styles.pawsCardTopImageWrap}>
        <Card.Img
          className={styles.pawsCardTopImage}
          variant="top"
          src={topImage}
          alt={title}
        />
      </div>
    )}
    {/* Square image is defined */}
    {image && (
      <Card.Img
        src={image}
        className={classNames(styles.pawsCardImage)}
        alt={title}
      />
    )}
    {/* Fallback - no image defined */}
    {!topImage && !image && (
      <Card.Img
        variant="top"
        src={logo2}
        className={classNames(styles.pawsCardImage, styles.desaturated)}
        alt={title}
      />
    )}
    <Card.Body className={styles.pawsCardBody}>
      <Card.Title className={classNames(styles.pawsCardTitle)}>
        {title}
      </Card.Title>

      <Card.Text className={classNames(styles.pawsCardText)}>{text}</Card.Text>

      {buttonText && buttonLink && (
        <Link to={buttonLink} className={classNames("btn", buttonStyle)}>
          {buttonText}
        </Link>
      )}
    </Card.Body>
  </Card>
);
