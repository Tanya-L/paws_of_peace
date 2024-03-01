import React from "react";
import { Header } from "../components/headerAndFooter/Header";
import { Footer } from "../components/headerAndFooter/Footer";
import { PawsLangStrings, PawsLanguage, useTranslate } from "../components/langSwitcher/LangSwitcher";
import { PawsFacebook, PawsIfYouHaveQuestions, PawsInstagram } from "../components/prefabs";
import Collapsible from "react-collapsible";
import styles from "../App.module.css";
import { Col, Row } from "react-bootstrap";

const strings: PawsLangStrings = {
  [PawsLanguage.Swe]: {
    "Activity reports": "Verksamhetsrapporter",
    "text.reports": "Vi publicerar regelbundet verksamhetsrapporter i våra sociala medier",
    "text.processed-2022-2023": "Behandlade hjälpbegäranden 2022-2023",
    "text.sent-2022-2023": "Skickade förnödenheter 2022-2023",
    "title.Region": "Region",
    "title.Boxes": "Lådor",
    "title.Weight": "Vikt, kg",
    "region.Vinnytska": "Vinnytska regionen",
    "region.Volynska": "Volynska regionen",
    "region.Dnipro": "Dnipropetrovsk regionen",
    "region.Donetsk": "Donetsk regionen",
    "region.Zhytomyr": "Zhytomyr regionen",
    "region.Zaporizhya": "Zaporizhya regionen",
    "region.Ivano-Frankivsk": "Ivano-Frankivsk regionen",
    "region.Kyiv": "Kyiv regionen",
    "region.Kropyvnytski": "Kyrovohrad regionen",
    "region.Lviv": "Lviv regionen",
    "region.Mykolaiv": "Mykolaiv regionen",
    "region.Odesa": "Odesa regionen",
    "region.Sumy": "Sumy regionen",
    "region.Ternopil": "Ternopil regionen",
    "region.Kharkiv": "Kharkiv regionen",
    "region.Kherson": "Kherson regionen",
    "region.Khmelnytsky": "Khmelnytsky regionen",
    "region.Cherkasy": "Cherkasy regionen",
    "region.Chernyhyv": "Chernyhyv regionen",
    "text.total": "Totalt",
    Awards: "Utmärkelser",
    "Media Mentions": "Mediaomtal",
    "Events and Demonstrations": "Evenemang och Demonstrationer",
    "Public Actions": "Offentliga Protester",
    Accreditations: "Ackrediteringar",
    Statistics: "Statistik",
    "text.Total requests for help in 2022-2023": "Antal hjälpbegäranden 2022-2023",
  },
  [PawsLanguage.Ukr]: {
    "Activity reports": "Звіти про діяльність",
    "text.reports": "Ми публікуємо регулярні звіти про нашу діяльність",
    "text.processed-2022-2023": "Оброблені запити на допомогу в 2022-2023 роках",
    "text.sent-2022-2023": "Відправлені посилки в 2022-2023 роках",
    "title.Region": "Область",
    "title.Boxes": "Коробки",
    "title.Weight": "Вага, кг",
    "region.Vinnytska": "Вінницька обл.",
    "region.Volynska": "Волинська обл.",
    "region.Dnipro": "Дніпропетровська обл.",
    "region.Donetsk": "Донецька обл.",
    "region.Zhytomyr": "Житомирська обл.",
    "region.Zaporizhya": "Запорізька обл.",
    "region.Ivano-Frankivsk": "Івано-Франківська обл.",
    "region.Kyiv": "Київська обл.",
    "region.Kropyvnytski": "Кіровоградська обл.",
    "region.Lviv": "Львівська обл.",
    "region.Mykolaiv": "Миколаївська обл.",
    "region.Odesa": "Одеська обл.",
    "region.Sumy": "Сумська обл.",
    "region.Ternopil": "Тернопільська обл.",
    "region.Kharkiv": "Харківська обл.",
    "region.Kherson": "Херсонська обл.",
    "region.Khmelnytsky": "Хмельницька обл.",
    "region.Cherkasy": "Черкаська обл.",
    "region.Chernyhyv": "Чернігівська обл.",
    "text.total": "Всього",
    Awards: "Нагороди",
    "Media Mentions": "Згадки в ЗМІ",
    "Events and Demonstrations": "Події та демонстрації",
    "Public Actions": "Громадські акції протесту",
    Accreditations: "Акредитації",
    Statistics: "Статистика",
    "text.Total requests for help in 2022-2023": "Всього запитів на допомогу в 2022-2023 роках",
  },
  [PawsLanguage.Eng]: {
    "text.reports": "We regularly publish activity reports in our social media accounts",
    "text.processed-2022-2023": "Processed requests for help in 2022-2023",
    "text.sent-2022-2023": "Sent supplies for help in 2022-2023",
    "title.Region": "Region",
    "title.Boxes": "Boxes",
    "title.Weight": "Weight",
    "region.Vinnytska": "Vinnytska region",
    "region.Volynska": "Volynska region",
    "region.Dnipro": "Dnipropetrovska region",
    "region.Donetsk": "Donetska region",
    "region.Zhytomyr": "Zhytomyrka region",
    "region.Zaporizhya": "Zaporizhska region",
    "region.Ivano-Frankivsk": "Ivano-Frankivska region",
    "region.Kyiv": "Kyivska region",
    "region.Kropyvnytski": "Kyrovohradska region",
    "region.Lviv": "Lvivska region",
    "region.Mykolaiv": "Mykolaivska region",
    "region.Odesa": "Odeska region",
    "region.Sumy": "Sumy region",
    "region.Ternopil": "Ternopilska region",
    "region.Kharkiv": "Kharkivska region",
    "region.Kherson": "Khersonska region",
    "region.Khmelnytsky": "Khmelnytska region",
    "region.Cherkasy": "Cherkaska region",
    "region.Chernyhyv": "Chernyhyvska region",
    "text.total": "Total",
    "text.Total requests for help in 2022-2023": "Total requests for help in 2022-2023",
  },
};

const ReportRow = (props: { count: number; weight: number; title: string }) => (
  <tr>
    <td>{props.title}</td>
    <td className={styles.number}>{props.count}</td>
    <td className={styles.number}>{props.weight}</td>
  </tr>
);

const ProcessedReport2022_2023 = () => {
  const { translate: t } = useTranslate(strings);
  return (
    <table className={styles.tab}>
      <thead>
        <tr>
          <td>{t("title.Region")}</td>
          <td>{t("title.Boxes")}</td>
          <td>{t("title.Weight")}</td>
        </tr>
      </thead>
      <tbody>
        <ReportRow title={t("region.Vinnytska")} count={7} weight={175} />
        <ReportRow title={t("region.Volynska")} count={1} weight={25} />
        <ReportRow title={t("region.Dnipro")} count={31} weight={775} />
        <ReportRow title={t("region.Donetsk")} count={31} weight={1125} />
        <ReportRow title={t("region.Zhytomyr")} count={5} weight={125} />
        <ReportRow title={t("region.Zaporizhya")} count={63} weight={1925} />
        <ReportRow title={t("region.Ivano-Frankivsk")} count={4} weight={100} />
        <ReportRow title={t("region.Kyiv")} count={23} weight={575} />
        <ReportRow title={t("region.Kyrovohrad")} count={11} weight={275} />
        <ReportRow title={t("region.Lviv")} count={3} weight={75} />
        <ReportRow title={t("region.Mykolaiv")} count={45} weight={1125} />
        <ReportRow title={t("region.Odesa")} count={98} weight={2450} />
        <ReportRow title={t("region.Sumy")} count={28} weight={700} />
        <ReportRow title={t("region.Ternopil")} count={2} weight={50} />
        <ReportRow title={t("region.Kharkiv")} count={34} weight={850} />
        <ReportRow title={t("region.Kherson")} count={8} weight={200} />
        <ReportRow title={t("region.Khmelnytsky")} count={2} weight={50} />
        <ReportRow title={t("region.Cherkasy")} count={6} weight={150} />
        <ReportRow title={t("region.Chernyhyv")} count={1} weight={25} />
      </tbody>
      <tfoot>
        <tr>
          <td>{t("text.total")}</td>
          <td className={styles.number}>416</td>
          <td className={styles.number}>11100</td>
        </tr>
      </tfoot>
    </table>
  );
};

const SentReport2022_2023 = () => {
  const { translate: t } = useTranslate(strings);
  return (
    <table className={styles.tab}>
      <thead>
        <tr>
          <td>{t("title.Region")}</td>
          <td>{t("title.Boxes")}</td>
          <td>{t("title.Weight")}</td>
        </tr>
      </thead>
      <tbody>
        <ReportRow title={t("region.Vinnytska")} count={2} weight={50} />
        <ReportRow title={t("region.Volynska")} count={0} weight={0} />
        <ReportRow title={t("region.Dnipro")} count={20} weight={500} />
        <ReportRow title={t("region.Donetsk")} count={27} weight={1025} />
        <ReportRow title={t("region.Zhytomyr")} count={2} weight={50} />
        <ReportRow title={t("region.Zaporizhya")} count={49} weight={1575} />
        <ReportRow title={t("region.Ivano-Frankivsk")} count={4} weight={100} />
        <ReportRow title={t("region.Kyiv")} count={19} weight={475} />
        <ReportRow title={t("region.Kropyvnytski")} count={8} weight={200} />
        <ReportRow title={t("region.Lviv")} count={3} weight={75} />
        <ReportRow title={t("region.Mykolaiv")} count={43} weight={1075} />
        <ReportRow title={t("region.Odesa")} count={86} weight={2150} />
        <ReportRow title={t("region.Sumy")} count={18} weight={450} />
        <ReportRow title={t("region.Ternopil")} count={2} weight={50} />
        <ReportRow title={t("region.Kharkiv")} count={24} weight={600} />
        <ReportRow title={t("region.Kherson")} count={4} weight={100} />
        <ReportRow title={t("region.Khmelnytsky")} count={2} weight={50} />
        <ReportRow title={t("region.Cherkasy")} count={5} weight={125} />
        <ReportRow title={t("region.Chernyhyv")} count={1} weight={25} />
      </tbody>
      <tfoot>
        <tr>
          <td>{t("text.total")}</td>
          <td className={styles.number}>330</td>
          <td className={styles.number}>8950</td>
        </tr>
      </tfoot>
    </table>
  );
};

const AchievementsPage = () => {
  const { translate: t } = useTranslate(strings);

  return (
    <>
      {/*<PawsFacebookScript />*/}

      <Header currentPageId="achievements" />

      <h3>{t("Activity reports")}</h3>

      <p>
        {t("text.reports")}: <PawsFacebook />, <PawsInstagram />
      </p>

      <h3>{t("Statistics")}</h3>

      <Row className={"my-3"}>
        <p>
          {t("text.Total requests for help in 2022-2023")}: <strong>525</strong>
        </p>

        <Col sm={12} lg={6}>
          <Collapsible
            trigger={t("text.processed-2022-2023")}
            className="btn btn-secondary"
            transitionCloseTime={1}
            transitionTime={1}
          >
            <ProcessedReport2022_2023 />
          </Collapsible>
        </Col>
        <Col sm={12} lg={6}>
          <Collapsible
            trigger={t("text.sent-2022-2023")}
            className="btn btn-secondary"
            transitionCloseTime={1}
            transitionTime={1}
          >
            <SentReport2022_2023 />
          </Collapsible>
        </Col>
      </Row>

      <h3>{t("Awards")}</h3>
      <h3>{t("Media Mentions")}</h3>
      <h3>{t("Events and Demonstrations")}</h3>
      {/*<h3>{t("Public Actions")}</h3>*/}
      <h3>{t("Accreditations")}</h3>

      <p>
        <PawsIfYouHaveQuestions />
      </p>

      <Footer />
    </>
  );
};

export { AchievementsPage };
