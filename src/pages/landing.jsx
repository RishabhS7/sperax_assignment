import React from "react";

import "../css/landing.css";
import Header from "../components/header";
import TokenBalance from "../components/tokenBalance";
import TransferToken from "../components/transferToken";
import Footer from "../components/footer";

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-frame9">
        <Header></Header>
        <TokenBalance />
        <TransferToken />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
