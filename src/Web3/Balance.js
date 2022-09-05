import Web3 from "web3/dist/web3.min.js";
import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";

let web3;
var provider = new WalletConnectProvider({
  rpc: {
    56: "https://bsc-dataseed1.ninicoin.io",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    1: "https://mainnet.infura.io/v3/",
    // ...
  },
  bridge: "https://bridge.walletconnect.org",
});

console.log(web3);


export const DisconnectWallet = async () => {
  await provider.disconnect();
  web3 = null;
};
export const MetaMasklogin = async () => {
  const data = await window.ethereum.enable()
  web3 = new Web3(window.ethereum)
  return data[0]
}

export const getUserAddress = async () => {
  try {
    const address = await web3.eth.getAccounts()
    return address[0]
  } catch (error) {
    console.log(error)
  }
}