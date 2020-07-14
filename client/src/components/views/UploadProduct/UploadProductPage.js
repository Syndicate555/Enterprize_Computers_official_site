import React, { useState } from "react";
const Category = [
  { key: 1, value: "Desktop PCs and Software" },
  {
    key: 2,
    value: "Notebooks and Tablets",
  },
  {
    key: 3,
    value: "Case & Cooling",
  },
  {
    key: 4,
    value: "Computer Components",
  },
  {
    key: 5,
    value: "CPU",
  },
  {
    key: 6,
    value: "Flash/Storage Media",
  },
  {
    key: 7,
    value: "Smart Phones & Gadgets",
  },
  {
    key: 8,
    value: "Hard Drives & SSDs",
  },
  {
    key: 9,
    value: "Headphones & Speakers",
  },
  {
    key: 10,
    value: "Peripherals",
  },
  {
    key: 11,
    value: "Memory",
  },
  {
    key: 12,
    value: "Monitors",
  },
  {
    key: 13,
    value: "Motherboards",
  },
  {
    key: 14,
    value: "Networking ",
  },
  {
    key: 15,
    value: "Power Protection",
  },
  {
    key: 16,
    value: "Power Supplies",
  },
  {
    key: 17,
    value: "Security & Surveillance",
  },
];

function UploadProductPage() {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
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
        <input onChange={setPriceValue} value={PriceValue} />
        <br></br>
        <br></br>
        <br></br>
        <label>Category</label>
        <br></br>
        <select>
          {Category.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UploadProductPage;
