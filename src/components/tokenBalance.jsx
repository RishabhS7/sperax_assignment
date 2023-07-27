import { useEffect } from "react";
import { useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import { erc20ABI } from "wagmi";
import { formatEther } from "viem";

function TokenBalance({ balance, setBalance, tokenAddress, setTokenAddress }) {
  const { address, isConnected } = useAccount();

  const { data, isError, isSuccess, isLoading } = useContractRead({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [address],
  });
  console.log(balance);
  return (
    <div className="landing-page-frame3">
      <div>
        <div className="landing-page-frame31">
          <div className="landing-page-frame03">
            <span className="landing-page-text19 Heading">
              <span>ERC20 Token Balance</span>
            </span>
          </div>
          <div className="landing-page-frame04">
            <button
              className="landing-page-text21 Button landing-page-frame05"
              onClick={() => setBalance(data)}
            >
              Submit
            </button>
            <input
              className="landing-page-frame06 "
              placeholder="Enter Ethereum address"
              onChange={(e) => setTokenAddress(e.target.value)}
            />
            <div className="landing-page-frame07">
              <span className="landing-page-text25 Paragraph">
                <span>Ethereum Address</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {balance ? (
        <div className="landing-page-frame08">
          <div className="landing-page-frame4">
            <span className="landing-page-text27 Input">
              <span>Token Balance</span>
            </span>
            <span className="landing-page-text29">
              <span>{Number(formatEther(balance)).toFixed(4)}</span>
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default TokenBalance;
