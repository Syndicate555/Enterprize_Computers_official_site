import React, { useState } from "react";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;
const categories = [
  {
    _id: 1,
    name: "Desktop PCs and Software",
  },
  {
    _id: 2,
    name: "Notebooks and Tablets",
  },
  {
    _id: 3,
    name: "Case & Cooling",
  },
  {
    _id: 4,
    name: "Computer Components",
  },
  {
    _id: 5,
    name: "CPUs",
  },
  {
    _id: 6,
    name: "Flash/Storage Media",
  },
  {
    _id: 7,
    name: "Smart Phones & Gadgets",
  },
  {
    _id: 8,
    name: "Hard Drives & SSDs",
  },
  {
    _id: 9,
    name: "Headphones & Speakers",
  },
  {
    _id: 10,
    name: "Peripherals",
  },
  {
    _id: 11,
    name: "Memory",
  },
  {
    _id: 12,
    name: "Monitors",
  },
  {
    _id: 13,
    name: "Motherboards",
  },
  {
    _id: 14,
    name: "Networking",
  },
  {
    _id: 15,
    name: "Power Protection",
  },
  {
    _id: 16,
    name: "Power Supplies",
  },
  {
    _id: 17,
    name: "Security & Surveillance",
  },
];

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckboxLists = () =>
    categories.map((value, index) => (
      <React.Fragment key={index}>
        <br />
        <Checkbox
          onChange={() => handleToggle(value._id)}
          type="checkbox"
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span>{value.name}</span>
        <br />
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header="Filter by Category" key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
