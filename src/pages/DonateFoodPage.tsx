import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import { Map } from "../components/main/Map";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../components/langSwitcher/langSwitcher";
import {
  Paws100PercentDisclaimer,
  PawsAddress,
  PawsIfYouHaveQuestions,
  PawsOpeningHours,
} from "../components/prefabs";
import { Container } from "react-bootstrap";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "donate.title": "Пожертвувати їжу та речі для тварин",
    "We welcome donations of": "Ми приймаємо негрошові пожертви",
    "list.animal food":
      "їжа для тварин 🐾 (нова, відкрита, навіть дещо прострочена)",
    cages: "клітки (переноски) для тварин",
    "pet blankets": "ковдрочки для укривання",
    "toys (old, new)": "іграшки (старі та нові)",
    "list.medications":
      "ліки та медичні засоби, що не потребують рецепту лікаря (протипаразитарні засоби, медичні ошийники тощо)",
    "text.bringWhere":
      "Приносьте та привозьте пожертви на нашу адресу, або можна домовитись про місце і час, де ми заберемо вашу пожертву (якщо багато речей).",
  },
  [PawsLanguage.Eng]: {
    "donate.title": "Donate food and supplies to Paws of Peace",
    "list.animal food": "animal food 🐾 (new, open, slightly expired)",
    "list.medications": "medications (deworming, medical collars, etc.)",
    "text.bringWhere":
      "You can bring your donations to our location OR contact us to arrange a pick-up.",
  },
};

const DonateFoodPage = () => {
  const { translate } = useTranslate(strings);

  return (
    <>
      <Header currentPageId="donateFood" />
      <div>
        <Container>
          <h1>{translate("donate.title")}</h1>
          <div className="p-4">
            {translate("We welcome donations of")}
            <ul>
              <li>{translate("list.animal food")}</li>
              <li>{translate("cages")}</li>
              <li>{translate("pet blankets")}</li>
              <li>{translate("toys (old, new)")}</li>{" "}
              <li>{translate("list.medications")}</li>
            </ul>

            <p className="fw-bold m-1">
              {translate("text.bringWhere")} <PawsAddress />{" "}
              <PawsOpeningHours />
            </p>

            <PawsIfYouHaveQuestions />
            <Map />
            <Paws100PercentDisclaimer />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export { DonateFoodPage };
