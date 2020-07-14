import React, { useState } from "react";

function UploadProductPage() {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState("");
  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };
  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };
  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2> Upload Travel Product</h2>
      </div>

      <form onSubmit>
        {/* DropZone */}
        <br></br>
        <br></br>
        <label> Title </label>
        <input onChange={onTitleChange} value={TitleValue} />
        <br></br>
        <br></br>
        <label>Description</label>
        <br></br>
        <textarea onChange={onDescriptionChange} value={DescriptionValue} />
        <br></br>
        <br></br>
        <label>Price($)</label>
        <br />
        <br />
        <input onChange={setPriceValue} value={PriceValue} />
        <select>
          <option></option>
        </select>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UploadProductPage;
