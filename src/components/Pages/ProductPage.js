import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Image, Header, Segment, Button, Label } from "semantic-ui-react";

const ProductPage = ({
  setProductCount,
  productCount,
  setSize,
  size,
  setCartProduct,
  cartProduct,
}) => {
  const location = useLocation();
  const product = location?.state.product;
  const [error, setError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  console.log("product", product);

  const handleCart = () => {
    if (!size) {
      setError(true);
    } else {
      setError(false);
      setAddedToCart(true);
      setProductCount(productCount + 1);
      setCartProduct([...cartProduct, product]);
      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
    }
  };

  return (
    <div style={{ margin: "2rem", width: "100%", display: "flex" }}>
      <div
        style={{ width: "65%", display: "flex", flexWrap: "wrap", gap: "1rem" }}
      >
        {product?.galleryImages.map((image, idx) => (
          <div key={idx}>
            <Image src={image.url} size="large" />
          </div>
        ))}
      </div>
      <div style={{ width: "35%", margin: "1rem" }}>
        <Header as="h1">{product?.name}</Header>
        <p>{product?.price?.formattedValue}</p>

        {product?.articleColorNames?.map((colorName) => (
          <div style={{ display: "inline-block", marginRight: ".5rem" }}>
            <p>{colorName}</p>
          </div>
        ))}

        <Segment style={{ display: "flex" }}>
          {product?.allArticleImages.map((image) => (
            <Image src={image} size="small" centered />
          ))}
        </Segment>
        <div>
          {product?.variantSizes?.map((variant, idx) => (
            <Label
              key={idx}
              style={{
                padding: ".8rem 2rem",
                marginRight: ".5rem",
                textAlign: "center",
                color: size === variant.filterCode ? "white" : "initial",

                backgroundColor:
                  size === variant.filterCode ? "black" : "lightgray",
              }}
              onClick={(e, data) => setSize(data.children)}
            >
              {variant.filterCode}
            </Label>
          ))}
        </div>
        {error && <p style={{ color: "red" }}>Please select a size</p>}
        <div style={{ margin: "1rem 0rem" }}>
          <Button color="teal" onClick={handleCart}>
            Add to Cart
          </Button>
          {addedToCart && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "rgba(0, 128, 0, 0.9)",
                color: "white",
                padding: "0.5rem",
                borderRadius: "5px",
                zIndex: "9999",
                marginTop: "1rem",
              }}
            >
              Added to Cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
