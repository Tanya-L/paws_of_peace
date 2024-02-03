import React from "react";
import cat3 from "../../Img/cat3.png";
import dog from "../../Img/dog.png";
import { Link } from "react-router-dom";
import { MapImage } from "./Map";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../langSwitcher/LangSwitcher";
import {
  PawsAddressShort,
  PawsFacebook,
  PawsInstagram,
  PawsOpeningHoursShort,
} from "../prefabs";
import { PawsUrl } from "../../site-const";
import { Col, Container, Row } from "react-bootstrap";

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
    "link.reportsPage": "Сторінка звітів",
  },
  [PawsLanguage.Swe]: {
    "We help animals in Ukraine": "Vi hjälper djur i Ukraina",
    "Our mission": "Vår mission",
    "text.mission":
      "Vi stödjer projekt för sterilisering och vaccination av djur i Ukraina, " +
      "och hjälper även hemlösa och övergivna djur med mat och medicinsk vård. " +
      "Gå med i Paws of Peace för att stödja djurhem i Ukraina genom att donera djurfoder, " +
      "djurvårdsprodukter eller pengar för att hjälpa oss att göra skillnad.",
    "About Paws of Peace": "Om Paws of Peace",
    "text.about":
      "Vi är en ideell organisation baserad i Sverige som är dedikerad till att göra en positiv " +
      "skillnad för djurskydd i Ukraina. Vårt primära fokus är att samla in donationer, " +
      "inklusive financiell stöd, djurfoder och djurvårdsprodukter, som sedan skickas till Ukraina. " +
      "Vårt mål är att fördela dessa donationer bland djurhem i Ukraina som behöver hjälp. " +
      "Vårt team arbetar outtröttligt för att säkerställa att de donationer vi får används på " +
      "bästa möjliga sätt. Vi utvärderar noggrant djurhemmens behov och strävar efter att " +
      "fördela resurserna där de kommer att ha störst effekt. I kärnan av vår mission ligger " +
      "övertygelsen att varje djur förtjänar ett tryggt och kärleksfullt hem. Vi är passionerat " +
      "engagerade i att förvandla denna övertygelse till verklighet. Tillsammans kan vi göra " +
      "en betydande skillnad i dessa djurs liv.",
    "How can you help?": "Hur kan du hjälpa till?",
    "text.donateFood": "Du kan donera djurfoder och förnödenheter på",
    "text.donateMoney":
      "Du kan donera pengar via Swish, Bankgiro, Paypal eller Buymeacoffee.",
    "Our activity reports": "Våra aktivitetsrapporter",
    "text.reports":
      "Regelbundna rapporter om vår verksamhet i våra sociala medier",
    "link.reportsPage": "Se Rapportsidan",
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
    "link.reportsPage": "See the Reports page",
  },
};

export const MainPageBody = () => {
  const { translate } = useTranslate(strings);

  return (
    <Container>
      <Row>
        <Col lg={8}>
          <h1>{translate("We help animals in Ukraine")}</h1>

          <h3>{translate("Our mission")}</h3>
          <p>{translate("text.mission")}</p>
        </Col>
        <Col lg={4}>
          <img src={cat3} width="100%" alt="Cat" />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <h3>{translate("About Paws of Peace")}</h3>
          <p>{translate("text.about")}</p>
        </Col>
        <Col lg={4}>
          <img src={dog} width="100%" alt="Dog" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{translate("How can you help?")}</h3>
          <p>
            {translate("text.donateFood")}{" "}
            <b>
              <PawsAddressShort />, <PawsOpeningHoursShort />.
            </b>
          </p>
          <p>{translate("text.donateMoney")}</p>

          <h3>{translate("Our activity reports")}</h3>
          <p>
            {translate("text.reports")}: <PawsFacebook />, <PawsInstagram />.{" "}
            <Link to={PawsUrl.Reports}>{translate("link.reportsPage")}</Link>
          </p>
        </Col>{" "}
        <Col lg={4}>
          <Link to={PawsUrl.Contact}>
            <MapImage />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
