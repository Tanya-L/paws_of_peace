import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import Facebook from "../Img/contact/fb.png";
import Instagram from "../Img/contact/insta1.png";
// import Construction from "../Img/Under-Construction.png";
import styles from "../App.module.css";
import classNames from "classnames";

const Reports = () => (
  <>
    <Header activeItem="reports" />
    <div>
      <div className="container text-center">
        <h1>Our activity reports </h1>
        <div className="text-start p-4">
          <h3>Everyday activity reports</h3>
          <div className="text-start">
            <div className="text-start">
              Everyday activity report in our social media accounts: Facebook
              page
              <a
                className="text-body-secondary p-1"
                href="https://www.facebook.com/pawsofpeace"
              >
                <img
                  src={Facebook}
                  className={styles.textInline}
                  alt="Facebook"
                />
              </a>
              Instagram page
              <a
                className="text-body-secondary p-1"
                href="https://www.instagram.com/thepawsofpeace/"
              >
                <img
                  src={Instagram}
                  className={classNames(styles.textInline, "black-and-white")}
                  alt="Instagram"
                />
              </a>
              <p className="mt-4">
                ❓ If you have any questions, please don't hesitate to send us a
                message.
              </p>
            </div>
          </div>
          {/*<h3>Monthly activity reports</h3>*/}
          {/*<img src={Construction} alt={""} />*/}
        </div>
        <Footer />
      </div>
    </div>
  </>
);

export { Reports };
