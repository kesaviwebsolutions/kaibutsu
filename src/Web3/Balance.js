import Web3 from "web3/dist/web3.min.js";

const web3 = new Web3(window.ethereum);
console.log(web3);

export const getAccount = async () => {
  const web = new Web3(window.ethereum);
  const account = await web.eth.getAccounts();
  return account[0];
};
