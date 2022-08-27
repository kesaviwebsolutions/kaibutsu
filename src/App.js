import "./App.css";
import Header1 from "./Header1";
import Header2 from "./Header2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Shifted from "./components/pages/Shifted";

function App() {
  return (
    <>
      <Router>
        <Header1 />
        <Header2 />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shifted" element={<Shifted />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
