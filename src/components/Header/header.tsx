import logo from "../../Img/logo.png";
import React from "react";
import "./header.css";

export const Header = () => (
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      <img src={logo} width={48} />
    </a>

    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="/" className="nav-link active" aria-current="page">
          Home
        </a>
      </li>

      <li className="nav-item">
        <a href="/faq" className="nav-link">
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a href="/about" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a href="/donate" className="nav-link">
          Donate
        </a>
      </li>
    </ul>
  </header>
);