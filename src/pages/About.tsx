import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { AboutUs } from "../components/about";
import { TeamSection } from "../components/teamSection";

function About() {
  return (
    <div className="container">
      <Header activeItem="about" />
      <AboutUs />
      <TeamSection />
      <Footer />
    </div>
  );
}

export { About };
