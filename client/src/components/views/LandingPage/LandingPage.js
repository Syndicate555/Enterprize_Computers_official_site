import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";

function LandingPage() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    Axios.post("/api/product/getProduct").then((response) => {
      if (response.data.success) {
        setProducts(response.data.Products);
      } else {
        alert("Failed to fetch product data");
      }
    });
  });
  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>
          {" "}
          Welcome to the World of Computers
          <Icon type="rocket" />{" "}
        </h2>
      </div>
    </div>
  );
}

export default LandingPage;
