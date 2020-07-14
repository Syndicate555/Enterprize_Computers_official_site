import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
const { Title } = Typography;
const { TextArea } = Input;
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
  const [CategoryValue, setCategoryValue] = useState(1);
  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };
  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };
  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };
  const onCategorySelectChange = (event) => {
    setCategoryValue(event.currentTarget.value);
  };
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Product</Title>
      </div>

      <Form onSubmit>
        {/* DropZone */}
        <br></br>
        <br></br>
        <label> Title </label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br></br>
        <br></br>
        <label>Description</label>
        <br></br>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br></br>
        <br></br>
        <label>Price($)</label>
        <br />
        <Input onChange={onPriceChange} value={PriceValue} />
        <br></br>
        <br></br>
        <br></br>
        <label>Category</label>
        <br></br>
        <select
          onChange={onCategorySelectChange}
          value={CategoryValue}
          style={{ width: "400px" }}
        >
          {Category.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
        <Button style={{ background: "lightblue" }}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
