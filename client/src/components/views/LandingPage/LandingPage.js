import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Axios from "axios";
import ImageSlider from "../../utils/ImageSlider";

import { Icon, Col, Card, Row } from "antd";
const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(12);
  const [PostSize, setPostSize] = useState();

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };
    getProducts(variables);
  }, []);

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={4} md={12} xs={20}>
        <Card hoverable={true} cover={<ImageSlider images={product.images} />}>
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  const getProducts = (variables) => {
    Axios.post("/api/product/getProducts", variables).then((response) => {
      if (response.data.success) {
        setProducts([...Products, ...response.data.products]);
      } else {
        alert("Failed to fetch product data");
      }
    });
  };

  const loadMore = () => {
    let skip = Skip + Limit;
    const variables = {
      skip: skip,
      limit: Limit,
    };
    getProducts(variables);
  };
  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1>
          {" "}
          Welcome to the World of Computers
          <Icon type="rocket" />{" "}
        </h1>
        <br />
        <br />
      </div>

      {/* Filter  */}

      <Row gutter={[16, 16]}>{renderCards}</Row>

      {Products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No post yet...</h2>
        </div>
      ) : (
        <div></div>
      )}

      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
