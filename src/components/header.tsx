import logo from "../Img/logo.png";
import React, { FC } from "react";
import "./header.css";

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
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img src={logo} width={48} />
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="/" className={isActive("home")} aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/DonateMoney" className={isActive("donateMoney")}>
            Donate Money
          </a>
        </li>
        <li className="nav-item">
          <a href="/DonateFood" className={isActive("donateFood")}>
            Donate Supplies
          </a>
        </li>
        <li className="nav-item">
          <a href="/Faq" className={isActive("faq")}>
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="/About" className={isActive("about")}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/Contact" className={isActive("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};
