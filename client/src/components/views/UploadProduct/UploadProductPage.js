import React from "react";

function UploadProductPage() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2> Upload Travel Product</h2>
      </div>

      <form>
        {/* DropZone */}
        <br></br>
        <br></br>
        <label> Title </label>
        <input />
        <br></br>
        <br></br>
        <label>Description</label>
        <textarea />
        <br></br>
        <br></br>
        <label>Price($)</label>
      </form>
    </div>
  );
}

export default UploadProductPage;
