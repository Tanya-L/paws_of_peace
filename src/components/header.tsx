import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import logo from "../Img/logo.png";

interface HeaderProps {
  activeItem: string;
}

export const Header: FC<HeaderProps> = ({ activeItem }) => {
  const isActive = (item: string) => {
    if (activeItem === item) {
      return "nav-link active";
    } else {
      return "nav-link";
    }
  };
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img src={logo} width={48} alt="Paws of Peace" />
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/" className={isActive("home")} aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donateMoney" className={isActive("donateMoney")}>
            Donate Money
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donateFood" className={isActive("donateFood")}>
            Donate Supplies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faq" className={isActive("faq")}>
            FAQs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={isActive("about")}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className={isActive("contact")}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};
