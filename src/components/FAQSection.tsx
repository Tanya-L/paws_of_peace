import React from "react";

export const FAQSection = () => (
  <div>
    <div className="container text-center">
      <h1>FAQ</h1>
      <div className="row">
        <div className="col">
          <h3>What is Paws of Peace?</h3>
          <p>
            Paws of Peace is a non-profit organization that helps animals in
            Ukraine. We collect donations of pet food and supplies, and send
            them to shelters in Ukraine. We also help with fundraising and
            awareness campaigns for animal shelters in Ukraine.
          </p>
        </div>
        <div className="col">
          <h3>How can I help?</h3>
          <p>
            You can help by donating pet food and supplies, or by donating money
            to help us with our fundraising efforts. You can also help by
            spreading the word about our organization and our mission.
          </p>
        </div>
        <div className="col">
          <h3>How can I donate?</h3>
          <p>
            You can donate pet food and supplies by sending them to our address
            in <b>Stockholm, Sveavägen 162B, Sundays 2-6pm.</b> You can donate
            money by sending a Swish payment to our{" "}
            <b>Swish number 123 437 52 83.</b>
            You can also donate money by sending a bank transfer to our bank
            account.
          </p>
        </div>
      </div>
      <p>
        <a className="link-opacity-100" href="/faq">
          More FAQ (Ukrainian)
        </a>
      </p>
    </div>
  </div>
);
