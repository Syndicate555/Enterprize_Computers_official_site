import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Axios from "axios";

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
    <>
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Let's Start Coding!</span>
      </div>
    </>
  );
}

export default LandingPage;
