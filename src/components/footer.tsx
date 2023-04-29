import React from "react";
import Email from "../Img/mail.png";
import { ReactComponent as Instagram } from "../Img/insta.svg";
import Facebook from "../Img/fb.png";

export const Footer = () => (
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 text-body-secondary">
        © 2023 Paws of Peace
      </span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="mailto:thepawsofpeace@gmail.com"
        >
          <img src={Email} width={32} />
        </a>
      </li>
      <li className="ms-3">
        <a className="text-body-secondary" href="#">
          <Instagram className="black-and-white" width={32} />
        </a>
      </li>
      <li className="ms-3">
        <a className="text-body-secondary" href="#">
          <img src={Facebook} width={32} />
        </a>
      </li>
    </ul>
  </footer>
);
