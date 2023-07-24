import React from "react";

import "../css/landing.css";
import Header from "../components/header";
import TokenBalance from "../components/tokenBalance";
import TransferToken from "../components/transferToken";
import Footer from "../components/footer";
import { useState } from "react";

const LandingPage = (props) => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [balance, setBalance] = useState(0);
  return (
    <div className="landing-page-container">
      <div className="landing-page-frame9">
        <Header></Header>
        <TokenBalance
          balance={balance}
          setBalance={setBalance}
          tokenAddress={tokenAddress}
          setTokenAddress={setTokenAddress}
        />
        {tokenAddress ? (
          <TransferToken balance={balance} tokenAddress={tokenAddress} />
        ) : null}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
