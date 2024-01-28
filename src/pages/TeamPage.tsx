import React from "react";
import { Header } from "../components/headerAndFooter/Header";
import { Footer } from "../components/headerAndFooter/Footer";
import { TeamPageBody } from "../components/TeamPageBody";

const TeamPage = () => (
  <>
    <Header currentPageId="team" />
    <TeamPageBody />
    <Footer />
  </>
);

export { TeamPage };
