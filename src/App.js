import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import WomenCollection from "./components/Pages/WomenCollection";
import ManCollection from "./components/Pages/ManCollection";
import HomeCollection from "./components/Pages/HomeCollection";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { getProductsList } from "./api";
import ProductPage from "./components/Pages/ProductPage";
import Main from "./components/Main/Main";
import Cart from "../src/components/Pages/Cart";
const App = () => {
  const [productListWoman, setProductListWoman] = useState([]);
  const [productCount, setProductCount] = useState(0);

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
        <Navbar productCount={productCount} />

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cart" element={<Cart />}></Route>

          <Route
            path="/women"
            element={<WomenCollection productListWoman={productListWoman} />}
          ></Route>
          <Route
            path="/product-page"
            element={
              <ProductPage
                setProductCount={setProductCount}
                productCount={productCount}
              />
            }
          ></Route>
          <Route path="/man" element={<ManCollection />}></Route>
          <Route path="/home" element={<HomeCollection />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
