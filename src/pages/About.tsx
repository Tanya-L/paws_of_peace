import React from "react";
import { Header } from "../components/Header/header";
import { Footer } from "../components/footer";
import { AboutUs } from "../components/about";

function About() {
  return (
    <div className="container">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}

export { About };
