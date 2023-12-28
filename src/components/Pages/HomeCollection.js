import React, { useEffect, useState } from "react";
import { getHomeProductsList } from "../../api";
import { Card, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const HomeCollection = () => {
  const [homeCollecton, setHomeCollection] = useState([]);

  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/product-page`, { state: { product } });
  };

  useEffect(() => {
    getHomeProductsList()
      .then((response) => {
        setHomeCollection(response.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Home collection
      </h1>
      <Card.Group itemsPerRow={4}>
        {homeCollecton?.map((product, idx) => (
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

export default HomeCollection;
