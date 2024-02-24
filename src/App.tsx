import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import styles from "./App.module.css";

import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { ContactPage } from "./pages/ContactPage";
import { DonateFoodPage } from "./pages/DonateFoodPage";
import { DonateMoneyPage } from "./pages/DonateMoneyPage";
import { FaqPage } from "./pages/FaqPage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { HelpRequestPage } from "./pages/HelpRequestPage";
import { CookiesProvider } from "react-cookie";
import { LangSwitcherPage, PawsLanguage } from "./components/langSwitcher/LangSwitcher";
import ErrorPage from "./pages/ErrorPage";

import { PawsUrl } from "./site-const";
import { OrganisationPage } from "./pages/OrganisationPage";
import { Container } from "react-bootstrap";
import classNames from "classnames";

const App = () => {
  const router = createHashRouter([
    { path: PawsUrl.Root, element: <HomePage />, errorElement: <ErrorPage /> },
    { path: PawsUrl.Team, element: <TeamPage /> },
    { path: PawsUrl.Faq, element: <FaqPage /> },
    { path: PawsUrl.Contact, element: <ContactPage /> },
    { path: PawsUrl.RequestHelp, element: <HelpRequestPage /> },
    { path: PawsUrl.DonateMoney, element: <DonateMoneyPage /> },
    { path: PawsUrl.DonateSupplies, element: <DonateFoodPage /> },
    { path: PawsUrl.Achievements, element: <AchievementsPage /> },
    { path: PawsUrl.Organisation, element: <OrganisationPage /> },
    { path: PawsUrl.Ukrainian, element: <LangSwitcherPage lang={PawsLanguage.Ukr} /> },
    { path: PawsUrl.English, element: <LangSwitcherPage lang={PawsLanguage.Eng} /> },
    { path: PawsUrl.Swedish, element: <LangSwitcherPage lang={PawsLanguage.Swe} /> },
  ]);

  return (
    <React.StrictMode>
      <CookiesProvider>
        <Container as="main" className={classNames(styles.pawsMain)} fluid>
          <RouterProvider router={router} />
        </Container>
      </CookiesProvider>
    </React.StrictMode>
  );
};

export default App;
