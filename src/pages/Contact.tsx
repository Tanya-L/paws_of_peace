import React from "react";
import { Header } from "../components/header";
import Email from "../Img/contact/mail.png";
import Facebook from "../Img/contact/fb.png";
import Instagram from "../Img/contact/insta1.png";
import LinkedIn from "../Img/contact/linkedin.png";
import Linktree from "../Img/contact/linktree.png";
import styles from "../App.module.css";
import classNames from "classnames";
import { PawsMap } from "../components/main/pawsMap";

const Contact = () => (
  <div className="container">
    <Header activeItem="contact" />
    <h1>Contact Paws of Peace</h1>
    <ul className="vertical-list list-unstyled">
      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="mailto:thepawsofpeace@gmail.com"
        >
          <img
            src={Email}
            className={classNames(styles.textInline, styles.contactIcon)}
            alt="E-mail"
          />
          <span>thepawsofpeace@gmail.com</span>
        </a>
      </li>
      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="https://www.facebook.com/pawsofpeace"
        >
          <img
            src={Facebook}
            className={classNames(styles.textInline, styles.contactIcon)}
            alt="Facebook"
          />
          pawsofpeace
        </a>
      </li>
      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="https://www.instagram.com/thepawsofpeace/"
        >
          <img
            className={classNames(
              styles.textInline,
              styles.contactIcon,
              "black-and-white"
            )}
            src={Instagram}
            alt="Instagram"
          />
          @thepawsofpeace
        </a>
      </li>
      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="https://www.linkedin.com/company/paws-of-peace/"
        >
          <img
            src={LinkedIn}
            className={classNames(styles.textInline, styles.contactIcon)}
            alt="Linkedin"
          />
          paws-of-peace
        </a>
      </li>
      <li className="ms-3">
        <a className="text-body-secondary" href="https://linktr.ee/pawsofpeace">
          <img
            src={Linktree}
            className={classNames(styles.textInline, styles.contactIcon)}
            alt="Linktree"
          />
          pawsofpeace
        </a>
      </li>
    </ul>

    <h3>Find Us Here</h3>
    <p>
      Located in Stockholm, at Sveavägen 162B. Open on Sundays from 14:00 to
      18:00, other days negotiable only for cargo handling.
    </p>
    <PawsMap />
  </div>
);

export { Contact };
