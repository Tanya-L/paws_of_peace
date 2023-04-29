import React from "react";

interface CardProps {
  image: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

export const Card = ({
  image,
  title,
  text,
  buttonText,
  buttonLink,
}: CardProps) => (
  <div className="card" style={{ width: "100%" }}>
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={buttonLink} className="btn btn-primary">
        {buttonText}
      </a>
    </div>
  </div>
);
