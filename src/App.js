import React from "react";
import Navbar from "./components/Navbar/Navbar";
import WomenCollection from "./components/Pages/WomenCollection";
import ManCollection from "./components/Pages/ManCollection";
import HomeCollection from "./components/Pages/HomeCollection";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/women" element={<WomenCollection />}></Route>
          <Route path="/man" element={<ManCollection />}></Route>
          <Route path="/home" element={<HomeCollection />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
