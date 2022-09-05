import "./App.css";
import Header1 from "./Header1";
import Header2 from "./Header2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Shifted from "./components/pages/Shifted";
import Profile from "./components/pages/Profile";
import Upvote from "./Upvote";
import React, { useState, useEffect } from "react";
import {
  DisconnectWallet,
  getAccount,
  MetaMasklogin,
} from "./Web3/Balance";

function App() {
  const [mode, setMode] = useState("dark");
  const [user, setUser] = useState();
  const [account, setAccount] = useState("");

  useEffect(() => {
    const init = async () => {
      const wallet = window.localStorage.getItem("wallet");
      if (wallet) {
        await Metamask();
      }
    };
    init();
  }, []);

  const Metamask = async () => {
    await MetaMasklogin();
    const add = await getAccount();
    window.localStorage.setItem("wallet", "wallet");
    setAccount(add);
    setUser(add);
  };

  const Disconnect = async () => {
    await DisconnectWallet();
    setAccount(undefined);
    setUser(undefined);
    window.localStorage.removeItem("wallet");
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Header1 mode={mode} toggleMode={toggleMode} />
        <Header2
          mode={mode}
          Metamask={Metamask}
          user={user}
          account={account}
          Disconnect={Disconnect}
        />

        <Routes>
          <Route exact path="/" element={<Home mode={mode} />} />
          <Route exact path="/shifted" element={<Shifted />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Upvote" element={<Upvote mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
