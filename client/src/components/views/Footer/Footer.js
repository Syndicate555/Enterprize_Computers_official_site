import React from "react";
function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p>
        {" "}
        Created by{" "}
        <a
          href="https://saffataziz.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saffat Aziz
        </a>
      </p>
    </div>
  );
}

export default Footer;
