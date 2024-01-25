import React from "react";
import cat3 from "../../Img/cat3.png";
import dog from "../../Img/dog.png";
import styles from "../../App.module.css";
import Facebook from "../../Img/contact/fb.png";
import Instagram from "../../Img/contact/insta1.png";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { PawsMapImage } from "./pawsMap";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../langSwitcher/langSwitcher";
import { PawsAddressShort, PawsOpeningHoursShort } from "../constants";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "We help animals in Ukraine": "Ми допомагаємо тваринам в Україні",
    "Our mission": "Наше завдання",
    "text.mission":
      "Ми підтримуємо проекти стерилізації та вакцинації тварин в Україні, " +
      "а також допомагаємо бездомним тваринам отримати " +
      "їжу та медичну допомогу. Приєднуйтесь до Paws of Peace, щоб підтримати " +
      "притулки для тварин в Україні. Жертвуйте в Швеції їжу для тварин, " +
      "засоби для догляду за тваринами, або надсилайте грошові пожертви, аби " +
      "допомогти нам змінити ситуацію на краще.",
    "About Paws of Peace": "Про Paws of Peace",
    "text.about":
      "Ми — неприбуткова організація зі штаб-квартирою в Швеції, " +
      "ми присвячені справі поліпшення умов утримання тварин в Україні. Наша " +
      "основна мета — збір пожертв, в тому числі фінансової підтримки, " +
      "корму для тварин та засобів для догляду за тваринами, які потім " +
      "надсилаються в Україну. Наша мета — розподіл цих пожертв серед " +
      "притулків для тварин в Україні, які потребують допомоги. Наша команда " +
      "працює неустанно, щоб забезпечити доставку отриманих пожертв " +
      "найефективнішим способом. Ми ретельно оцінюємо потреби притулків " +
      "та намагаємося розподілити ресурси там, де вони матимуть найбільший " +
      "вплив. У центрі нашої місії лежить переконання, що кожна тварина " +
      "заслуговує на безпечний та люблячий дім. Ми наполегливо прагнемо " +
      "перетворити це переконання на реальність. Разом ми можемо " +
      "зробити значний внесок у покращення життя цих тварин.",
    "How can you help?": "Як ви можете допомогти?",
    "text.donateFood":
      "Ви можете пожертвувати корм та інші товари для тварин за адресою",
    "text.donateMoney":
      "Ви можете пожертвувати гроші через Swish (Швеція), Bankgiro (Швеція), Paypal або Buymeacoffee.",
    "Our activity reports": "Звіти про діяльність",
    "text.reports":
      "Ми публікуємо регулярні звіти про нашу діяльність у соцмедіа",
    "See Reports": "Сторінка звітів",
  },
  [PawsLanguage.Eng]: {
    "text.mission":
      "We support animal sterilization and vaccination projects in " +
      "Ukraine, and also help provide homeless and abandoned animals with " +
      "food and medical treatment. Join Paws of Peace in supporting " +
      "animal shelters in Ukraine by donating pet food, pet care " +
      "products, or money to help us make a difference.",
    "text.about":
      "We are a nonprofit organization based in Sweden dedicated to\n" +
      " making a positive impact on animal welfare in Ukraine. Our primary\n" +
      " focus is on collecting donations, including financial support, pet\n" +
      " food, and pet care products, which are then sent to Ukraine. Our\n" +
      " goal is to distribute these donations among animal shelters in\n" +
      " Ukraine that are in need of assistance. Our team works tirelessly\n" +
      " to ensure that the donations we receive are utilized in the most\n" +
      " effective manner possible. We carefully evaluate the needs of the\n" +
      " shelters and strive to allocate resources where they will have the\n" +
      " greatest impact. At the core of our mission is the belief that\n" +
      " every animal deserves a safe and loving home. We are passionately\n" +
      " committed to turning this belief into a reality. Together, we can\n" +
      " make a significant difference in the lives of these animals.",
    "text.donateFood": "You can donate pet food and supplies at",
    "text.donateMoney":
      "You can donate money via Swish, Bankgiro, Paypal or Buymeacoffee.",
    "text.reports":
      "Regular reports on our activity in our social media accounts",
  },
};

export const MainSection = () => {
  const { translate } = useTranslate(strings);

  return (
    <div className="container text-center bg-light main">
      <div className="row">
        <div className="col-8">
          <div>
            <h1>{translate("We help animals in Ukraine")}</h1>
            <h3>{translate("Our mission")}</h3>
            <div className="text-start">{translate("text.mission")}</div>

            <h3>{translate("About Paws of Peace")}</h3>
            <div className="text-start">{translate("text.about")}</div>

            <h3>{translate("How can you help?")}</h3>
            <div className="text-start">
              <Link to="/contact">
                <PawsMapImage floatSmall={true} />
              </Link>
              {translate("text.donateFood")}{" "}
              <b>
                <PawsAddressShort />, <PawsOpeningHoursShort />.
              </b>
              <p>{translate("text.donateMoney")}</p>
            </div>

            <h3>{translate("Our activity reports")}</h3>
            <div className="text-start">
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
                  className={classNames("black-and-white", styles.textInline)}
                  alt="Instagram"
                />
              </a>
              <p>
                <Link to="/reports">{translate("See Reports")}</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-4">
            <img src={cat3} width="100%" alt="Cat" />
          </div>
          <div className="p-4">
            <img src={dog} width="100%" alt="Dog" />
          </div>
        </div>
      </div>
    </div>
  );
};
