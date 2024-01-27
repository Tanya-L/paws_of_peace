import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import { TeamPageBody } from "../components/TeamPageBody";

const TeamPage = () => (
  <>
    <Header currentPageId="team" />
    <TeamPageBody />
    <Footer />
  </>
);

export { TeamPage };
