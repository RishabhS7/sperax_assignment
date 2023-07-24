import { useEffect, useState } from "react";
import { useContractWrite } from "wagmi";
import { useAccount, useContractRead } from "wagmi";
import erc20ABI from "../abis/erc20ABI.json";
import { parseEther } from "viem";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Loader from "./loader";

function TransferToken({ balance, tokenAddress }) {
  const [modalIsOpen, setIsOpen] = useState(true);
  const { address } = useAccount();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmout] = useState("");
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: "transfer",
    args: [recipient, parseEther(amount).toString()],
    onSuccess(data) {
      console.log("console.log", data);
    },
    onError(data) {
      console.log(data);
    },
  });

  const transferTokens = () => {
    console.log(address, recipient, parseEther(amount).toString());
    write();
    if (isLoading) {
      console.log("progress");
    } else if (isSuccess) {
      console.log(data);
    }
  };
  return (
    <div id="modalelemet" className="landing-page-frame5">
      <div className="landing-page-frame09">
        <span className="landing-page-text31 Heading">
          <span>Transfer ERC20 Tokens</span>
        </span>
      </div>
      <div className="landing-page-frame10 landing-page-frame10">
        <div className="landing-page-frame11">
          <button
            className="landing-page-text33 Button  landing-page-frame11 "
            onClick={() => transferTokens()}
          >
            Transfer
          </button>
        </div>
        {/* <div className="landing-page-frame12">
          <span className="landing-page-text35 Input"> */}
        <input
          className="landing-page-frame12"
          placeholder="Enter token amount"
          onChange={(e) => setAmout(e.target.value)}
        />
        {/* </span>
        </div> */}
        <div className="landing-page-frame13">
          <span className="landing-page-text37 Paragraph">
            <span>Token Amount</span>
          </span>
        </div>
        <div className="landing-page-frame14">
          <span className="landing-page-text39 Input">
            <input
              className="Enter Ethereum address"
              onChange={(e) => setRecipient(e.target.value)}
            />
          </span>
        </div>
        <div className="landing-page-frame15">
          <span className="landing-page-text41 Paragraph">
            <span>Recipient&apos;s Ethereum Address</span>
          </span>
        </div>
      </div>
      <Modal
        open={modalIsOpen}
        onClose={() => setIsOpen(false)}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "modalClass",
        }}
      >
        <div>
          <div>Transaction is processing..</div>
          <div>
            <Loader status={"error"} size={100} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default TransferToken;
