import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { TeamSection } from "../components/teamSection";

function Team() {
  return (
    <div className="container">
      <Header activeItem="about" />
      <TeamSection />
      <Footer />
    </div>
  );
}

export { Team };
