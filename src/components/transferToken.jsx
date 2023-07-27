import { useEffect, useState } from "react";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import { useAccount, useContractRead } from "wagmi";
import erc20ABI from "../abis/erc20ABI.json";
import { parseEther } from "viem";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import TxnStatus from "./txnStatus";

function TransferToken({ balance, tokenAddress }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { address } = useAccount();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmout] = useState("");
  const [txnStatus, setTxnStatus] = useState({ status: "", msg: "" });
  const { data, isLoading, isSuccess, isError, isIdle, write } =
    useContractWrite({
      address: tokenAddress,
      abi: erc20ABI,
      functionName: "transfer",
      args: [recipient, parseEther(amount).toString()],
      onSettled(data) {
        console.log(data);
      },
      onMutate(data) {
        console.log("mutated", data);
      },
      onSuccess(data) {
        console.log("success", data);
        setTxnStatus({ status: "loading", msg: "Transaction Submitted" });
      },
      onError(data) {
        setTxnStatus({ status: "error", msg: "Transaction failed" });
      },
    });
  const waitForTransaction = useWaitForTransaction({
    hash: data?.hash,
    onSuccess() {
      setTxnStatus({ status: "complete", msg: "Transaction Successful" });
    },
  });
  console.log("wait", waitForTransaction);

  const transferTokens = () => {
    setTxnStatus({ status: "loading", msg: "Confirm your transaction.." });
    setIsOpen(true);
    console.log(address, recipient, parseEther(amount).toString());
    write();
    if (isLoading) {
      console.log("progress");
    } else if (isSuccess) {
      console.log(data);
    }
  };
  console.log(
    "err",
    isError,
    "idle",
    isIdle,
    "load",
    isLoading,
    "succ",
    isSuccess
  );
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
          <div>{txnStatus.msg}</div>
          <div>
            <TxnStatus status={txnStatus.status} size={100} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default TransferToken;
