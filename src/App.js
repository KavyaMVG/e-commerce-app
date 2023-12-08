import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import WomenCollection from "./components/Pages/WomenCollection";
import ManCollection from "./components/Pages/ManCollection";
import HomeCollection from "./components/Pages/HomeCollection";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { getProductsList } from "./api";
import ProductPage from "./components/Pages/ProductPage";

const App = () => {
  const [productListWoman, setProductListWoman] = useState([]);

  useEffect(() => {
    getProductsList()
      .then(({ results }) => {
        console.log(results);
        setProductListWoman(results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route
            path="/women"
            element={<WomenCollection productListWoman={productListWoman} />}
          ></Route>
          <Route path="/product-page" element={<ProductPage />}></Route>
          <Route path="/man" element={<ManCollection />}></Route>
          <Route path="/home" element={<HomeCollection />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
