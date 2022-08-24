// import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Header1 from "./Header1";
import Header2 from './Header2';
import Main from './Main';
// import { useState, useEffect } from "react";
// import {
//   GetChainId,
//   WalletConnect,
//   MetaMasklogin,
//   DissconnectWallet,
//   getUserAddress,
// } from "/home/team/Desktop/kaibutsu/src/Web3/Web3.js";


// function App() {
//   const [user, setUser] = useState();
//   const [acount, setAccount] = useState("");
  
//   useEffect(() => {
//     const init = async () => {
//       const wallet = window.localStorage.getItem("wallet");
//       if (wallet) {
//         // await Metamask();
//       }
//       const id = await GetChainId();
//       console.log(id);
//       if (Number(id) != 1) {
//         await window.ethereum.request({
//           method: "wallet_switchEthereumChain",
//           params: [{ chainId: "0x1" }], // chainId must be in hexadecimal numbers
//         });
//       }
//     };

//     init();
//   }, []);

//   const WalletC = async () => {
//     await WalletConnect();
//     const add = await getUserAddress();
//     setAccount(add);
//     setUser(add);
//   };

//   const Metamask = async () => {
//     await MetaMasklogin();
//     const add = await getUserAddress();
//     setAccount(add);
//     setUser(add);
//   };
//   const Dissconnect = async () => {
//     await DissconnectWallet();
//     setAccount(undefined);
//     setUser(undefined);
//   };

//   try {
//     window.ethereum.on("accountsChanged", function (accounts) {
//       setUser(accounts[0]);
//     });
//   } catch (error) {}

//   try {
//     window.ethereum.on("chainChanged", function (accounts) {
//       window.location.reload();
//     });
//   } catch (error) {}
function App(){
  return (


        <>
        <Header1/>
    <Header2/>
   <Main/>
   </>

);
}

export default App;
       {/* </Router> */}
    {/* </div> */}



