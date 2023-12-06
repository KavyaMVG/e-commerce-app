import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="d-flex">
        <div class="img-section bg-img-women">
          <h2 class="heading">A limited drop of elegant garments</h2>
          <p class="tagline">Let your light shine through</p>
          <button class="shop-btn" onClick={() => navigate("/women")}>
            Shop now
          </button>
        </div>
      </div>

      <div class="d-flex">
        <div class="img-section bg-img-man">
          <h2 class="heading">WINTER_EDIT / DECEMBER</h2>
          <p class="tagline">A modern take on heritage-inspired menswear.</p>
          <button class="shop-btn" onClick={() => navigate("/man")}>
            Shop now
          </button>
        </div>
      </div>

      <div class="d-flex">
        <div class="img-section bg-img-home">
          <h2 class="heading color-white">Elevated basics</h2>
          <p class="tagline color-white">
            Must-have for your home space, starting Rs 599
          </p>
          <button class="shop-btn" onClick={() => navigate("/home")}>
            Shop now
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
