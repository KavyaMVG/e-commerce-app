import React from "react";
import { Image, Segment, Header } from "semantic-ui-react";

const Cart = ({ cartProduct }) => {
  console.log({ cartProduct });
  return (
    <div>
      {cartProduct?.map((cartProduct, index) => (
        <Segment
          key={index}
          style={{
            display: "flex",
            gap: "1rem",
            width: "50%",
            margin: "2rem",
          }}
        >
          <div>
            <Image src={cartProduct?.allArticleImages[0]} size="small" />
          </div>
          <div>
            <Header as="h1">{cartProduct?.name}</Header>
            <p>{cartProduct?.price?.formattedValue}</p>

            <div style={{ display: "inline-block", marginRight: ".5rem" }}>
              <p>{cartProduct?.articles[0]?.color.text}</p>
            </div>
          </div>
        </Segment>
      ))}
    </div>
  );
};

export default Cart;
