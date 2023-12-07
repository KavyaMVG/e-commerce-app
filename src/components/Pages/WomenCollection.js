import React from "react";
import { Card, Image } from "semantic-ui-react";

//picture, article name, price, color

//allArticleImages[1]
// articleColorNames[0][1]
//articles[0].name
//price.formattedValue
//rgbColors
const WomenCollection = ({ productListWoman }) => {
  console.log("womenColle", productListWoman);

  return (
    <Card.Group itemsPerRow={4}>
      {productListWoman?.map((product, idx) => (
        <Card key={idx}>
          <Image src={product?.allArticleImages[0]} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{product?.name}</Card.Header>
            <Card.Meta>
              <span className="date">{product?.price?.formattedValue}</span>
            </Card.Meta>
            <div style={{ display: "flex", margin: "0" }}>
              {product.rgbColors.map((bgColor) => (
                <li
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
  );
};

export default WomenCollection;
