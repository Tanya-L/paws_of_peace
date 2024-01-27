import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import styles from "./App.module.css";

import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { ContactPage } from "./pages/ContactPage";
import { DonateFoodPage } from "./pages/DonateFoodPage";
import { DonateMoneyPage } from "./pages/DonateMoneyPage";
import { FaqPage } from "./pages/FaqPage";
import { ReportsPage } from "./pages/ReportsPage";
import { HelpRequestPage } from "./pages/HelpRequestPage";
import { CookiesProvider } from "react-cookie";
import {
  LangSwitcherPage,
  PawsLanguage,
} from "./components/langSwitcher/langSwitcher";
import ErrorPage from "./pages/ErrorPage";

import { PawsUrl } from "./site-const";
import { OrganisationPage } from "./pages/OrganisationPage";
import { Container } from "react-bootstrap";

const App = () => {
  const router = createBrowserRouter([
    {
      path: PawsUrl.Root,
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    { path: PawsUrl.Team, element: <TeamPage /> },
    { path: PawsUrl.Faq, element: <FaqPage /> },
    { path: PawsUrl.Contact, element: <ContactPage /> },
    { path: PawsUrl.RequestHelp, element: <HelpRequestPage /> },
    { path: PawsUrl.DonateMoney, element: <DonateMoneyPage /> },
    { path: PawsUrl.DonateSupplies, element: <DonateFoodPage /> },
    { path: PawsUrl.Reports, element: <ReportsPage /> },
    { path: PawsUrl.Organisation, element: <OrganisationPage /> },
    {
      path: PawsUrl.Ukrainian,
      element: <LangSwitcherPage lang={PawsLanguage.Ukr} />,
    },
    {
      path: PawsUrl.English,
      element: <LangSwitcherPage lang={PawsLanguage.Eng} />,
    },
  ]);

  return (
    <React.StrictMode>
      <CookiesProvider>
        <Container as="main" className={styles.pawsMain} fluid>
          <RouterProvider router={router} />
        </Container>
      </CookiesProvider>
    </React.StrictMode>
  );
};

export default App;
