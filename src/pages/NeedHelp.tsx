import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import { ButtonStyle, Card } from "../components/Card";
import secondHelp from "../Img/donate/secondHelp.png";
import needHelp from "../Img/donate/needHelp.png";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../components/langSwitcher/langSwitcher";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "eng.Disclaimer": "",
  },
  [PawsLanguage.Eng]: {
    "eng.Disclaimer":
      "Disclaimer: This page is to be used by those who are in need of help and located in Ukraine.",
  },
};

const NeedHelp = () => {
  const { translate } = useTranslate(strings);

  return (
    <>
      <Header activeItem="needHelp" />

      <p>{translate("eng.Disclaimer")}</p>

      <div className="row">
        <div className="col">
          <Card
            image={needHelp}
            title={"Потрібна допомога?"}
            text={
              <>
                Заповніть цю форму, і ми зробимо все можливе, щоб допомогти вам!
                Ця форма лише для тих, хто звертається вперше. Якщо ви вже
                отримували допомогу від нас, скористайтеся, будь ласка, другою
                формою.
              </>
            }
            buttonText={"Перше звернення"}
            buttonLink={"https://forms.gle/TepTjSrgbSpELcv66"}
          />
        </div>
        <div className="col">
          <Card
            image={secondHelp}
            title={"Знову потрібна допомога?"}
            text={
              <>
                Потребуете ПОВТОРНОЇ ДОПОМОГИ? Заповніть цю форму, і ми зробимо
                все можливе, щоб допомогти вам!
              </>
            }
            buttonText={"Друге та наступні звернення"}
            buttonLink={"https://forms.gle/TCMFJPBTPqFLbakz9"}
            buttonStyle={ButtonStyle.Primary}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export { NeedHelp };
