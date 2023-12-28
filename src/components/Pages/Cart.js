import React, { useState } from "react";
import { Image, Segment, Header, Input, Button } from "semantic-ui-react";
import { useClerk } from "@clerk/clerk-react";

const Cart = ({ cartProduct, size, setUserName }) => {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState();
  const clerk = useClerk();

  const handleQuantityChange = (productId, quantity) => {
    const product = cartProduct.find((p) => p.allArticleCodes[0] === productId);

    if (!product) {
      console.error("Product not found");
      return;
    }

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));

    const productPrice =
      product.price && product.price.value ? product.price.value : 0;
    setTotalPrice((productPrice * quantity).toFixed(2));
  };

  const handleCheckOutChange = () => {
    if (clerk.user) {
      // clerk.navigate("/payment");
      setUserName(clerk.user.firstName.split("")[0]);
    } else {
      clerk.openSignIn({});
      if (clerk.user) {
        clerk.navigate("/payment");
      }
    }
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "50%" }}>
        {cartProduct?.map((cartProduct, index) => {
          return (
            <Segment
              key={index}
              style={{
                display: "flex",
                gap: "1rem",
                width: "100%",
                margin: "2rem",
              }}
            >
              <div>
                <Image src={cartProduct?.allArticleImages[0]} size="small" />
              </div>
              <div>
                <Header as="h1">{cartProduct?.name}</Header>
                {/* <p>{cartProduct?.price?.formattedValue}</p> */}
                <p>{cartProduct?.price.formattedValue}</p>

                <div
                  style={{
                    display: "flex",
                    marginRight: ".5rem",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <Input
                    type="number"
                    min="1"
                    style={{ width: "60px" }}
                    value={quantities[cartProduct.allArticleCodes[0]] || 1}
                    onChange={(e) =>
                      handleQuantityChange(
                        cartProduct.allArticleCodes[0],
                        e.target.value
                      )
                    }
                  />

                  <div>
                    <p>Colour: {cartProduct?.articles[0]?.color.text}</p>
                  </div>
                  <div>
                    <p>Total Price: ${totalPrice} </p>
                  </div>
                  <div>
                    <p>Size:{size}</p>
                  </div>
                </div>
              </div>
            </Segment>
          );
        })}
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Button onClick={handleCheckOutChange}>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
