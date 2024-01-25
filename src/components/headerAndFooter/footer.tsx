import React from "react";
import Email from "../../Img/contact/mail.png";
import Instagram from "../../Img/contact/insta1.png";
import LinkedIn from "../../Img/contact/linkedin.png";
import Facebook from "../../Img/contact/fb.png";
import styles from "../../App.module.css";
import classNames from "classnames";

export const Footer = () => (
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
    <div className="col-md-8 d-flex align-items-center">
      <span className="mb-4 mb-md-0 text-body-secondary ">
        © 2024 Paws of Peace. Registered org nr in Sweden 802545-0886
      </span>
    </div>

    <ul className="nav col-md-4 justify-content-end align-items-baseline d-flex">
      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="mailto:thepawsofpeace@gmail.com"
        >
          <img src={Email} className={styles.footerInline} alt="Email" />
        </a>
      </li>
      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="https://www.facebook.com/pawsofpeace"
        >
          <img src={Facebook} className={styles.footerInline} alt="Facebook" />
        </a>
      </li>
      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="https://www.instagram.com/thepawsofpeace/"
        >
          <img
            src={Instagram}
            className={classNames("black-and-white", styles.footerInline)}
            alt="Instagram"
          />
        </a>
      </li>

      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="https://www.linkedin.com/company/paws-of-peace/"
        >
          <img src={LinkedIn} className={styles.footerInline} alt="Linkedin" />
        </a>
      </li>
    </ul>
  </footer>
);
