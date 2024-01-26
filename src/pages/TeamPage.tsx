import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import { TeamSection } from "../components/teamSection";

const TeamPage = () => (
  <>
    <Header activeItem="team" />
    <TeamSection />
    <Footer />
  </>
);

export { TeamPage };
