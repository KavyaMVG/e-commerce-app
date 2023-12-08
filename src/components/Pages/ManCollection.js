import React, { useEffect, useState } from "react";
import { getManProductsList } from "../../api";
import { Card, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const ManCollection = () => {
  const [mensCollecton, setMensCollection] = useState([]);

  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/product-page`, { state: { product } });
  };

  useEffect(() => {
    getManProductsList()
      .then((response) => {
        setMensCollection(response.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Men's collection
      </h1>
      <Card.Group itemsPerRow={4}>
        {mensCollecton?.map((product, idx) => (
          <Card key={idx} onClick={() => handleCardClick(product)}>
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
    </div>
  );
};

export default ManCollection;
