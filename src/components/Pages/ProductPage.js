import React from "react";
import { useLocation } from "react-router-dom";
import { Image, Header, Segment, Button, Label } from "semantic-ui-react";

const ProductPage = () => {
  const location = useLocation();
  const product = location?.state.product;
  console.log("product", product);

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
        {product?.variantSizes?.map((variant) => (
          <Label
            style={{
              padding: ".8rem 2rem",
              marginRight: ".5rem",
              textAlign: "center",
            }}
          >
            {variant.filterCode}
          </Label>
        ))}
        <div style={{ margin: "1rem 0rem" }}>
          <Button color="teal">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
