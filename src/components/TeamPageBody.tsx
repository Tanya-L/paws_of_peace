import React from "react";
import { ButtonStyle, PawsCard } from "./PawsCard";
import logo from "../Img/logo.png";
import Tanya from "../Img/teamPhoto/Tanya.png";
import TanyaK from "../Img/teamPhoto/TanyaK.png";
import { PawsLangStrings, PawsLanguage, useTranslate } from "./langSwitcher/LangSwitcher";
import { pawsMemberFormUrl, PawsUrl, pawsVolunteerFormUrl, styrelsenValdFor } from "../site-const";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function MailTo(props: { email: string }) {
  return <a href={"mailto:" + props.email}>{props.email}</a>;
}

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "team.title": "Правління Paws of Peace",
    Contact: "Зв'язатися",
    "Tanya Lytovchenko": "Тетяна Литовченко",
    Chairman: "Голова правління",
    "Tanya Kozoriz": "Тетяна Козоріз",
    "Vice-chairman": "Заступник голови правління",
    "Larisa Ostapenko": "Лариса Остапенко",
    Cashier: "Касир",
    "Dmytro Lytovchenko": "Дмитро Литовченко",
    "Board member": "Член правління",
    ["Rikku Bölske"]: "Рікку Бельске",
    "Ksenia Kalmykova": "Ксенія Калмикова",
    ["Charlotte Lindström"]: "Шарлотта Ліндстрьом",
    Volunteers: "Волонтери",
    "Support us through becoming a member": "Підтримайте нас ставши учасником",
    "text.board": (
      <>
        Правління було обране на {styrelsenValdFor} рік і може бути переобране або змінене на початку{" "}
        {styrelsenValdFor + 1} року. Всі учасники (які платять членський внесок) можуть приєднатися до щорічного
        засідання, голосувати, а також бути обраними в правління. Ви можете зв'язатися з правлінням, надіславши листа на{" "}
        <MailTo email="board@pawsofpeace.se" />.
      </>
    ),
    "text.volunteer":
      "Волонтерська робота в Paws of Peace — це безоплатна допомога, зазвичай це пересування " +
      "та пакування коробок на адресі, де знаходиться Paws of Peace. Волонтери потрібні кожну неділю з 14 до 18. " +
      "Хочете приєднатися до команди волонтерів?",
    "Contact us": "Зв'яжіться з нами",
    "text.members": (
      <>
        Учасники Paws of Peace — це люди, які підтримують нашу місію та діяльність. Членський внесок: 250 кр/рік для
        дорослих або 100 кр/рік для біженців та студентів, які можуть не мати стабільного доходу. Учасники можуть брати
        участь у щорічних зборах та голосувати за членів правління на наступний рік.{" "}
        <Link to={pawsMemberFormUrl}>Заповніть форму учасника</Link>в формі також є QR-код для переводу членського
        внеску (на суму 100 або 250 крон).
      </>
    ),
  },
  [PawsLanguage.Swe]: {
    "team.title": "Styrelsen för Paws of Peace",
    Contact: "Kontakta oss",
    "Tanya Lytovchenko": "Tanya Lytovchenko",
    Chairman: "Ordförande",
    "Tanya Kozoriz": "Tanya Kozoriz",
    "Vice-chairman": "Vice ordförande",
    "Larisa Ostapenko": "Larisa Ostapenko",
    Cashier: "Kassör",
    "Dmytro Lytovchenko": "Dmytro Lytovchenko",
    "Board member": "Styrelsemedlem",
    "Ksenia Kalmykova": "Ksenia Kalmykova",
    Volunteers: "Volontärer",
    "Support us through becoming a member": "Stöd oss genom att bli medlem",
    "text.board": (
      <>
        Styrelsen väljs för {styrelsenValdFor} och kan omväljas eller ändras tidigt {styrelsenValdFor + 1}
        Alla betalande medlemmar kan delta i årsmötet, rösta och kan också väljas som styrelsemedlemmar. Du kan kontakta
        styrelsen genom att skicka ett e-postmeddelande till <MailTo email="board@pawsofpeace.se" />.
      </>
    ),
    "text.volunteer":
      "Volontärarbete på Paws of Peace är obetalt arbete, " +
      "vanligtvis innebär det att hjälpa till att flytta och packa donationer " +
      "i lådor. Vi behöver volontärer tillgängliga på söndagar från 14 till 18. " +
      "Vill du gå med i volontärteamet?",
    "Contact us": "Kontakta oss",
    "text.members": (
      <>
        Medlemmar i Paws of Peace är människor som stöder vår mission och verksamhet. Det finns en medlemsavgift: 250
        kr/år för vuxna eller 100 kr/år för flyktingar och studenter som kanske inte har en stabil inkomst. Medlemmar
        kan delta i årsmöten och rösta för styrelsemedlemmar. <Link to={pawsMemberFormUrl}>Svära på enkäten</Link> och
        hitta en QR-kod därinne för att betala medlemsavgift: 250 eller 100 kr.
      </>
    ),
  },
  [PawsLanguage.Eng]: {
    "team.title": "Paws of Peace Board",
    "Larisa Ostapenko": "Larisa Ostapenko",
    "text.board": (
      <>
        The current board is elected for ${styrelsenValdFor} and can be re-elected or changed early in $
        {styrelsenValdFor + 1}. " + "All paying members can join the annual meeting, cast their votes and also can be
        elected as board members. You can contact the board by sending an email to{" "}
        <MailTo email="board@pawsofpeace.se" />.
      </>
    ),
    "text.volunteer":
      "Volunteer work is unpaid work at the Paws of Peace location, usually involves " +
      "helping moving and packing the donations into boxes. We need volunteers available on Sundays " +
      "from 14 to 18. Want to join the volunteer team?",
    "text.members": (
      <>
        Members of Paws of Peace are people who support our mission and activities. There is a membership fee: 250
        kr/year for adults or 100 kr/year for refugees and students, who might not have a stable income. Members can
        join annual meetings and vote for the board members. <Link to={pawsMemberFormUrl}>Fill the form</Link> and
        inside the form there is a QR-code to pay the membership fee: 250 or 100 kr.
      </>
    ),
  },
};

export const TeamPageBody = () => {
  const { translate, translateJsx } = useTranslate(strings);

  const board = [
    {
      image: Tanya,
      name: translate("Tanya Lytovchenko"),
      position: translate("Chairman"),
      contact: "https://www.linkedin.com/in/tanyalytovchenko/",
    },
    {
      image: TanyaK,
      name: translate("Tanya Kozoriz"),
      position: translate("Vice-chairman"),
      contact: "https://www.linkedin.com/in/tetiana-kozoriz-support/",
    },
    {
      image: undefined,
      name: translate("Larisa Ostapenko"),
      position: translate("Cashier"),
      contact: undefined,
    },
  ];
  const board2 = [
    {
      image: undefined,
      name: translate("Dmytro Lytovchenko"),
      position: translate("Board member"),
      contact: undefined,
    },
    {
      image: undefined,
      name: translate("Rikku Bölske"),
      position: translate("Board member"),
      contact: undefined,
    },
    {
      image: undefined,
      name: translate("Ksenia Kalmykova"),
      position: translate("Board member"),
      contact: undefined,
    },
    {
      image: undefined,
      name: translate("Charlotte Lindström"),
      position: translate("Board member"),
      contact: undefined,
    },
  ];

  return (
    <>
      <h3>{translate("team.title")}</h3>

      <p>{translateJsx("text.board")}</p>

      <Row>
        {board.map((member) => (
          <Col>
            <PawsCard
              image={member.image}
              title={member.name}
              text={member.position}
              buttonText={translate("Contact")}
              buttonLink={member.contact}
              buttonStyle={ButtonStyle.Link}
            />
          </Col>
        ))}
      </Row>

      <Row className="mt-2">
        {board2.map((member) => (
          <Col>
            <PawsCard
              image={member.image}
              title={member.name}
              text={member.position}
              buttonText={translate("Contact")}
              buttonLink={member.contact}
              buttonStyle={ButtonStyle.Link}
            />
          </Col>
        ))}
      </Row>

      <Row className="mt-2">
        <Col>
          <h3>{translate("Volunteers")}</h3>
          <PawsCard
            image={logo}
            title={translate("text.volunteer")}
            buttonText={translate("Contact us")}
            buttonLink={pawsVolunteerFormUrl}
          />
        </Col>
        <Col>
          <h3>{translate("Support us through becoming a member")}</h3>
          <PawsCard image={logo} title={translateJsx("text.members")} buttonText={translate("Contact us")} />
        </Col>
      </Row>
    </>
  );
};
