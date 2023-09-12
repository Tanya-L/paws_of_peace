import React from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ServicesSection } from "../components/servicesSection";
import { PartnersSection } from "../components/partnersSection";
import { MainSection } from "../components/mainSection";

function HomePage() {
  return (
    <div>
      <div className="container">
        <Header activeItem="home" />
        <MainSection />
        <ServicesSection />
        <div className="container text-center">
          {/* place for google maps*/}
          {/*<iframe*/}
          {/*  src="https://goo.gl/maps/jR7fqn8ov32TiWfD8"*/}
          {/*  width="600"*/}
          {/*  height="450"*/}
          {/*  loading="lazy"*/}
          {/*  referrerPolicy="no-referrer-when-downgrade"*/}
          {/*></iframe>*/}
        </div>
        <PartnersSection />
        <Footer />
      </div>
    </div>
  );
}

export { HomePage };
