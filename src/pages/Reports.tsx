import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import Facebook from "../Img/contact/fb.png";
import Instagram from "../Img/contact/insta1.png";
// import Construction from "../Img/Under-Construction.png";
import styles from "../App.module.css";
import classNames from "classnames";
import {
  PawsFacebookFeed,
  PawsFacebookScript,
} from "../components/PawsFacebookFeed";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../components/langSwitcher/langSwitcher";
import { PawsIfYouHaveQuestions } from "../components/constants";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "Activity reports": "Звіти про діяльність",
    "text.reports": "Ми публікуємо регулярні звіти про нашу діяльність",
  },
  [PawsLanguage.Eng]: {
    "text.reports":
      "We regularly publish activity reports in our social media accounts",
  },
};

const Reports = () => {
  const { translate } = useTranslate(strings);

  return (
    <>
      <PawsFacebookScript />

      <Header activeItem="reports" />

      <h1>{translate("Activity reports")}</h1>
      <div className="text-start">
        <div className="text-start">
          <p>
            {translate("text.reports")}: Facebook
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
            Instagram
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
          </p>
          <p>
            <PawsIfYouHaveQuestions />
          </p>
        </div>
      </div>
      {/*<h3>Monthly activity reports</h3>*/}
      {/*<img src={Construction} alt={""} />*/}

      {/*<PawsFacebookFeed />*/}
      <Footer />
    </>
  );
};

export { Reports };
