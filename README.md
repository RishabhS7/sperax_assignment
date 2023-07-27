# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Token Transfer - Sperax Assignment

## About

The Dapp is a decentralized application built using React, JavaScript, Wagmi, and viem for contract interactions. It utilizes Rainbow kit for wallet connections, which supports multiple chains and wallet types, such as Metamask, Wallet Connect, Coinbase, etc.

## How it Works

1. User connects to the Dapp through the Rainbow kit connect button.
2. The user enters the Ethereum token address.
3. After clicking the submit button, the Dapp displays the amount of ERC20 tokens that the user currently holds.
4. A box opens where the user can enter the recipient's address to receive the same ERC20 tokens.
5. The user adds the amount of tokens to transfer and submits the transaction.
6. The user then needs to confirm the transaction using their Metamask wallet.
7. Upon confirmation, the specified amount of ERC20 tokens will be transferred to the recipient's address.

## Installation

To install and run the Dapp, follow these steps:

1. Clone the repository by running the following command:
   git clone https://github.com/RishabhS7/sperax_assignment.git

3. Navigate to the project directory and install the dependencies using npm:
   cd sperax_assignment
   npm install
   
5. Once the installation is successful, start the Dapp using the following command:
   npm start


## Requirements

To use the Dapp, make sure you have the following:

- Node (for running npm commands)
- Git (for cloning the repository)
- A code editor such as Visual Studio Code or any other editor of your choice
- A blockchain wallet with an address and access to the particular chain's faucet. Supported wallets include Metamask, Wallet Connect, Coinbase, etc.

Please note that Rainbow kit is used for wallet connections, so you may need to have the compatible wallet extension (e.g., Metamask) installed in your browser to interact with the Dapp.

Feel free to explore the Dapp, transfer ERC20 tokens, and let us know if you encounter any issues or have any feedback! Happy transacting!

