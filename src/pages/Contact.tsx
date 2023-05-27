import React from "react";
import { Header } from "../components/header";
import Email from "../Img/contact/mail.png";
import Facebook from "../Img/contact/fb.png";
import Instagram from "../Img/contact/insta1.png";
import LinkedIn from "../Img/contact/linkedin.png";
import Linktree from "../Img/contact/linktree.png";

function Contact() {
  return (
    <div className="container">
      <Header activeItem="contact" />
      <div>
        <div className="container text-center">
          <h1>Contact Paws of Peace</h1>
          <div className="row">
            <ul className="vertical-list">
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="mailto:thepawsofpeace@gmail.com"
                >
                  <img src={Email} width={48} />
                  <span>thepawsofpeace@gmail.com</span>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://www.facebook.com/pawsofpeace"
                >
                  <img src={Facebook} width={48} />
                  pawsofpeace
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://www.instagram.com/thepawsofpeace/"
                >
                  <img className="black-and-white" src={Instagram} width={48} />
                  @thepawsofpeace
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://www.linkedin.com/company/paws-of-peace/"
                >
                  <img src={LinkedIn} width={48} />
                  paws-of-peace
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://linktr.ee/pawsofpeace"
                >
                  <img src={Linktree} width={48} />
                  pawsofpeace
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Contact };
