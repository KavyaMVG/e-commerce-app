import React from "react";
import { Card, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

//picture, article name, price, color

//allArticleImages[1]
// articleColorNames[0][1]
//articles[0].name
//price.formattedValue
//rgbColors
const WomenCollection = ({ productListWoman }) => {
  // console.log("womenColle", productListWoman);

  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/product-page`, { state: { product } });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Women's collection
      </h1>
      <Card.Group itemsPerRow={4}>
        {productListWoman?.map((product, idx) => (
          <Card key={idx} onClick={() => handleCardClick(product)}>
            <Image src={product?.allArticleImages[0]} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{product?.name}</Card.Header>
              <Card.Meta>
                <span className="date">{product?.price?.formattedValue}</span>
              </Card.Meta>
              <div style={{ display: "flex", margin: "0" }}>
                {product.rgbColors.map((bgColor, idx) => (
                  <li
                    key={idx}
                    className="item"
                    style={{
                      color: `${bgColor}`,
                      fontSize: "2.2rem",
                      margin: "0",
                    }}
                  ></li>
                ))}
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default WomenCollection;
