import React from "react";
import { ButtonStyle, Card } from "./Card";
import logo2 from "../Img/logo2.png";
import logo from "../Img/logo.png";
import Tanya from "../Img/teamPhoto/Tanya.png";
import TanyaK from "../Img/teamPhoto/TanyaK.png";
import Karina from "../Img/teamPhoto/Karina.png";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "./langSwitcher/langSwitcher";
import { pawsVolunteerFormUrl } from "../site-const";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "team.title": "Правління Paws of Peace",
    Contact: "Зв'язатися",
    "Tanya Lytovchenko": "Тетяна Литовченко",
    Chairman: "Голова правління",
    "Tanya Kozoriz": "Тетяна Козоріз",
    "Vice-chairman": "Заступник голови правління",
    "Karina SH": "Каріна Широких",
    Cashier: "Касир",
    "Dmytro Lytovchenko": "Дмитро Литовченко",
    "Board member": "Член правління",
    "Rikku Bölske": "Рікку Бельске",
    "Ksenia Kalmykova": "Ксенія Калмикова",
    Volunteers: "Волонтери",
    "Support us through becoming a member": "Підтримайте нас ставши учасником",
    "text.board":
      "Правління було обране на 2023 рік і може бути переобране або змінене на початку 2024 року. " +
      "Всі учасники (які платять членський внесок) можуть приєднатися до щорічного засідання, " +
      "голосувати, а також бути обраними в правління.",
    "text.volunteer":
      "Волонтерська робота в Paws of Peace — це безоплатна допомога, зазвичай це пересування " +
      "та пакування коробок на адресі, де знаходиться Paws of Peace. Волонтери потрібні кожну неділю з 14 до 18. " +
      "Хочете приєднатися до команди волонтерів?",
    "Contact us": "Зв'яжіться з нами",
    "text.members":
      "Учасники Paws of Peace — це люди, які підтримують нашу місію та діяльність. " +
      "Членський внесок: 250 кр/рік для дорослих або 100 кр/рік для біженців та студентів, " +
      "які можуть не мати стабільного доходу. Учасники можуть брати участь у щорічних зборах та " +
      "голосувати за членів правління на наступний рік.",
  },
  [PawsLanguage.Eng]: {
    "team.title": "Paws of Peace Board",
    "Karina SH": "Karina Shyrokykh",
    "text.board":
      "The current board is elected for 2023 and can be re-elected or changed early in 2024. " +
      "All paying members can join the annual meeting, cast their votes and also can be elected as board members.",
    "text.volunteer":
      "Volunteer work is unpaid work at the Paws of Peace location, usually involves " +
      "helping moving and packing the donations into boxes. We need volunteers available on Sundays " +
      "from 14 to 18. Want to join the volunteer team?",
    "text.members":
      "Members of Paws of Peace are people who support our mission and activities. " +
      "There is a membership fee: 250 kr/year for adults or 100 kr/year for refugees and students, " +
      "who might not have a stable income. Members can join annual meetings and vote for the board members.",
  },
};

export const TeamPageBody = () => {
  const { translate } = useTranslate(strings);

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
      image: Karina,
      name: translate("Karina SH"),
      position: translate("Cashier"),
      contact: "https://www.linkedin.com/in/karina-shyrokykh/",
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
  ];

  return (
    <>
      <h3>{translate("team.title")}</h3>

      <p>{translate("text.board")}</p>

      <div className="row">
        {board.map((member) => (
          <div className="col">
            <Card
              image={member.image}
              title={member.name}
              text={member.position}
              buttonText={translate("Contact")}
              buttonLink={member.contact}
              buttonStyle={ButtonStyle.Link}
            />
          </div>
        ))}
      </div>

      <div className="row mt-2">
        {board2.map((member) => (
          <div className="col">
            <Card
              image={member.image}
              title={member.name}
              text={member.position}
              buttonText={translate("Contact")}
              buttonLink={member.contact}
            />
          </div>
        ))}
      </div>

      <div className="row bg-light main mt-2">
        <h3>{translate("Volunteers")}</h3>
        <Card
          image={logo}
          title={translate("text.volunteer")}
          buttonText={translate("Contact us")}
          buttonLink={pawsVolunteerFormUrl}
        />
      </div>

      <div className="row bg-light main mt-2">
        <h3>{translate("Support us through becoming a member")}</h3>
        <Card
          image={logo}
          title={translate("text.members")}
          buttonText={translate("Contact us")}
          //buttonLink={"#"}
        />
      </div>

      {/*<div className="container text-center">*/}
      {/*  <div className="row gray">*/}
      {/*    <div className="col">*/}
      {/*      <Card image={logo2} title={"Nikolay Kotov"} text={"Supporter"} />*/}
      {/*    </div>*/}
      {/*    <div className="col">*/}
      {/*      <Card image={logo2} title={"Max Giryk"} text={"Supporter"} />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};
