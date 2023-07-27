import { ConnectButton } from "@rainbow-me/rainbowkit";
export const ConnectWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
      }) => {
        const connected =
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div>
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="connectwallet"
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="connectwallet"
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <button
                  style={{ cursor: "pointer" }}
                  onClick={openAccountModal}
                  type="button"
                  className="connectwallet"
                >
                  {account.displayName}
                  {/* {account.displayBalance ? ` (${account.displayBalance})` : ""} */}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
