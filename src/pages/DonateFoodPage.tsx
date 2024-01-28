import React from "react";
import { Header } from "../components/headerAndFooter/Header";
import { Footer } from "../components/headerAndFooter/Footer";
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
  [PawsLanguage.Swe]: {
    "donate.title": "Donera mat och saker till djur",
    "We welcome donations of": "Vi tar emot följande donationer",
    "list.animal food":
      "djurfoder 🐾 (nytt, öppnat, även om det är lite utgången)",
    cages: "burar (transportburar) för djur",
    "pet blankets": "filtar för djur",
    "toys (old, new)": "leksaker (gamla och nya)",
    "list.medications":
      "mediciner och medicinska produkter som är inte receptbelagda (avmaskningsmedel, medicinska kragar etc.)",
    "text.bringWhere":
      "Ta med dina donationer till vår adress, eller kontakta oss för att komma överens " +
      "om en tid och plats där vi kan hämta dina donationer (om det är mycket saker).",
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
