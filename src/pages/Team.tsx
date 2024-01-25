import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import { TeamSection } from "../components/teamSection";

const Team = () => (
  <>
    <Header activeItem="team" />
    <TeamSection />
    <Footer />
  </>
);

export { Team };
